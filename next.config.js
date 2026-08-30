/** @type {import('next').NextConfig} */
const nextConfig = {
  // 2026-08-29: required for @craudioviz/platform-sdk. The SDK ships raw
  // TypeScript and Next does not run node_modules through SWC by default, so
  // any import carrying a `type` re-export fails the build without this.
  transpilePackages: ["@craudioviz/platform-sdk"],
  typescript: {
    // 2026-08-21: was ignoreBuildErrors: true. With checking off this repo shipped
    // six real bugs that nothing reported: AuthProvider imported a function that
    // does not exist and threw on mount, so every consumer saw a signed-out app;
    // BrandedHeader read session.data.user when getSession() returns the user AS
    // session.data, so a signed-in visitor never looked signed in; it read
    // .plan when getBalance() returns .tier, so every account rendered as free;
    // and the plans table had no 'enterprise' entry at all, so the credits bar was
    // blank for the highest-paying customers.
    //
    // The compiler walked from a wrong import to a missing pricing tier. None of
    // it was findable by eye. Do not turn this back off.
    ignoreBuildErrors: false,
  },
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
}

// 2026-08-30: Next 15 compiles instrumentation.ts for the EDGE runtime as well
// as node, so the vault env-shim's `crypto` import is pulled into an edge
// bundle even though register() returns early off nodejs. Marking it
// unavailable for the edge compilation is what stops it. The import must stay
// a BARE `crypto` specifier: webpack rejects the `node:` scheme before
// resolve.fallback is ever consulted, so `node:crypto` fails here too.
const _edgeCryptoOff = (config, { nextRuntime }) => {
  if (nextRuntime === "edge") {
    config.resolve = config.resolve || {};
    config.resolve.fallback = { ...(config.resolve.fallback || {}), crypto: false };
  }
  return config;
};

module.exports = { ...nextConfig, webpack: _edgeCryptoOff };
