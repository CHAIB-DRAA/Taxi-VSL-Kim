export default function Footer(){
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600">
        © {new Date().getFullYear()} Taxi VSL Toulouse — Transport médical conventionné CPAM
      </div>
    </footer>
  )
}
