'use client'
import {BarChart3,TrendingUp,DollarSign,Users,Home,Calendar,Target,Award} from 'lucide-react'
const metrics=[
  {label:'Total Revenue',value:'$2.4M',change:'+12%',icon:DollarSign,color:'text-green-600'},
  {label:'Active Listings',value:'24',change:'+3',icon:Home,color:'text-blue-600'},
  {label:'Leads This Month',value:'156',change:'+18%',icon:Users,color:'text-purple-600'},
  {label:'Conversion Rate',value:'18.5%',change:'+2.3%',icon:Target,color:'text-orange-600'},
]
const recentSales=[
  {address:'123 Ocean Dr',price:450000,date:'Nov 18',agent:'Sarah J.',commission:13500},
  {address:'456 Palm Ave',price:325000,date:'Nov 15',agent:'Mike D.',commission:9750},
  {address:'789 Beach Blvd',price:550000,date:'Nov 12',agent:'Sarah J.',commission:16500},
]
export default function Analytics(){
  return(
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b"><div className="max-w-7xl mx-auto px-4 py-4"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><BarChart3 className="w-8 h-8 text-blue-600"/><div><h1 className="text-2xl font-bold">Analytics Dashboard</h1><p className="text-sm text-gray-500">Business intelligence & reporting</p></div></div><div className="flex gap-2"><button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Export</button><select className="px-4 py-2 border rounded-lg"><option>Last 30 Days</option><option>Last Quarter</option><option>Last Year</option></select></div></div></div></header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {metrics.map(m=>{const Icon=m.icon;return(
            <div key={m.label} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-3"><p className="text-sm text-gray-600">{m.label}</p><Icon className={`w-8 h-8 ${m.color}`}/></div>
              <p className="text-3xl font-bold text-gray-900">{m.value}</p>
              <p className="text-sm text-green-600 mt-1 flex items-center gap-1"><TrendingUp className="w-4 h-4"/>{m.change}</p>
            </div>
          )})}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6"><h3 className="text-lg font-semibold mb-4">Sales Performance</h3><div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-around p-4">{[65,82,58,95,73,88,92].map((h,i)=><div key={i} className="w-12 bg-blue-500 rounded-t" style={{height:`${h}%`}}></div>)}</div><div className="flex justify-around mt-4 text-xs text-gray-600"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div>
          <div className="bg-white rounded-lg shadow p-6"><h3 className="text-lg font-semibold mb-4">Lead Sources</h3><div className="space-y-4">{[{label:'Website',value:45,color:'bg-blue-500'},{label:'Referrals',value:30,color:'bg-green-500'},{label:'Social Media',value:15,color:'bg-purple-500'},{label:'Open Houses',value:10,color:'bg-orange-500'}].map(s=><div key={s.label}><div className="flex justify-between text-sm mb-2"><span>{s.label}</span><span className="font-semibold">{s.value}%</span></div><div className="h-2 bg-gray-200 rounded-full"><div className={`h-2 ${s.color} rounded-full`} style={{width:`${s.value}%`}}></div></div></div>)}</div></div>
        </div>
        <div className="bg-white rounded-lg shadow"><div className="p-6 border-b flex items-center justify-between"><h2 className="text-xl font-semibold">Recent Sales</h2><span className="text-sm text-gray-600">Total Commission: ${recentSales.reduce((s,r)=>s+r.commission,0).toLocaleString()}</span></div><div className="overflow-x-auto"><table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agent</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Commission</th></tr></thead><tbody className="divide-y">{recentSales.map(s=><tr key={s.address} className="hover:bg-gray-50"><td className="px-6 py-4 font-medium">{s.address}</td><td className="px-6 py-4 text-green-600 font-semibold">${s.price.toLocaleString()}</td><td className="px-6 py-4 text-gray-600">{s.date}</td><td className="px-6 py-4">{s.agent}</td><td className="px-6 py-4 font-semibold">${s.commission.toLocaleString()}</td></tr>)}</tbody></table></div></div>
      </main>
    </div>
  )
}
