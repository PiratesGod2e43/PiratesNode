const owners = [
  { username: "PiratesGaming", role: "Primary Owner" },
  { username: "slashingdugu", role: "Owner" }
];
const modules = [
  ["Manage Servers", "Create, start, stop and monitor Minecraft servers."],
  ["Server Splitter", "Allocate node RAM, CPU and storage with capacity checks."],
  ["Plugin Installer", "Install compatible plugins from verified sources."],
  ["Mod Installer", "Manage compatible Fabric, Forge and NeoForge mods."],
  ["Version Changer", "Back up, validate and change Minecraft versions."],
  ["VPS Panel", "Manage virtual machines and their lifecycle."],
  ["Billing & Redeem Codes", "Plans, invoices, verified payments and codes."],
  ["Admin & Owner Panels", "Staff permissions, branding, nodes and settings."]
];
export default function Home() {
  return <main className="shell">
    <aside className="sidebar">
      <div className="brand"><div className="mark">⚓</div><div><b>PIRATESNODES</b><small>HOSTING CONTROL CENTER</small></div></div>
      <div className="navlabel">WORKSPACE</div>
      {["Overview","Manage Servers","Server Splitter","Plugin Installer","Mod Installer","Version Changer","VPS Panel","Plans & Billing","Redeem Codes","Support"].map((x,i)=><div className={"nav "+(i===0?"active":"")} key={x}><span>{["◫","▣","⌘","▦","◇","↻","☁","＄","◇","?"][i]}</span>{x}</div>)}
      <div className="navlabel">ADMINISTRATION</div>
      <div className="nav"><span>⚙</span>Admin Panel</div><div className="nav"><span>♛</span>Owner Panel</div>
      <div className="sidefoot"><span className="dot"/> Platform preview <small>Connect backend to go live</small></div>
    </aside>
    <section className="content">
      <header><div><small className="eyebrow">PIRATESNODES / OVERVIEW</small><h1>Hosting Overview</h1><p>Manage your hosting platform from one place.</p></div><div className="profile"><div className="avatar">PG</div><div><b>Owner access</b><small>Account setup required</small></div></div></header>
      <div className="notice"><b>Setup status</b><span>This is a starter dashboard preview. Authentication, billing and real server provisioning are not connected yet.</span></div>
      <div className="stats">{[["Total Servers","0","No nodes connected"],["Online Servers","0","Live status unavailable"],["Available RAM","—","Connect a node"],["Customers","0","Registration not enabled"]].map(([a,b,c])=><article className="stat" key={a}><small>{a}</small><strong>{b}</strong><span>{c}</span></article>)}</div>
      <div className="sectionhead"><div><h2>Platform Modules</h2><p>Expandable hosting tools</p></div><span className="pill">8 CORE MODULES</span></div>
      <div className="modules">{modules.map(([a,b],i)=><article className="module" key={a}><div className="moduleicon">{["▣","⌘","▦","◇","↻","☁","＄","♛"][i]}</div><h3>{a}</h3><p>{b}</p><span className="coming">Foundation planned</span></article>)}</div>
      <div className="sectionhead"><div><h2>Owner Accounts</h2><p>Account names reserved for secure setup</p></div></div>
      <div className="owners">{owners.map(o=><div className="owner" key={o.username}><div className="avatar">{o.username==="PiratesGaming"?"PG":"SD"}</div><div><b>{o.username}</b><small>{o.role}</small></div><span className="pill pending">Setup required</span></div>)}</div>
      <footer>PiratesNodes · Starter scaffold · Securely configure accounts and infrastructure before public launch.</footer>
    </section>
  </main>;
}
