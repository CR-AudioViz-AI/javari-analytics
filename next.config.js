/** @type {import('next').NextConfig} */
const nextConfig = {
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
module.exports = nextConfig
