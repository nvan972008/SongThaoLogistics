import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ST</span> {/* Updated logo initials */}
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SÔNG THAO</h1> {/* Updated company name */}
              <p className="text-sm text-muted-foreground">Vận tải Đường sắt</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#trang-chu" className="text-foreground hover:text-primary transition-colors">
              Trang chủ
            </a>
            <a href="#dich-vu" className="text-foreground hover:text-primary transition-colors">
              Dịch vụ
            </a>
            <a href="#uu-diem" className="text-foreground hover:text-primary transition-colors">
              Ưu điểm
            </a>
            <a href="#lien-he" className="text-foreground hover:text-primary transition-colors">
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>0123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>vantaisongthao@gmail.com</span> {/* Updated email domain */}
              </div>
            </div>
            <Button>Báo giá</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
