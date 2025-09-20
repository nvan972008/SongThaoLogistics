import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="lien-he" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Liên hệ với chúng tôi</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ để nhận tư vấn và báo giá miễn phí.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Hotline</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary mb-1">0986864824</p>
                  <p className="text-sm text-muted-foreground">Hỗ trợ 24/7</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold text-accent mb-1">vantaisongthao@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Phản hồi trong 2h</p>
                </CardContent>
              </Card>
            </div>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Trụ sở chính</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">Ga Gáp Bát - số 264 Giải Phóng P. Định Công, TP Hà Nội</p>
                <p className="text-muted-foreground mb-4">Tòa nhà</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Thứ 2 - Thứ 6: 8:00 - 17:30 | Thứ 7: 8:00 - 12:00</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">Hà Nội</div>
                <div className="text-sm text-muted-foreground">Chi nhánh Miền Bắc</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-accent">Đà Nẵng</div>
                <div className="text-sm text-muted-foreground">Chi nhánh Miền Trung</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">Cần Thơ</div>
                <div className="text-sm text-muted-foreground">Chi nhánh Miền Tây</div>
              </div>
            </div>
          </div>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Gửi yêu cầu báo giá</CardTitle>
              <p className="text-muted-foreground">Điền thông tin để nhận báo giá chi tiết trong vòng 30 phút</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Họ và tên *</label>
                  <Input placeholder="Nhập họ và tên" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Số điện thoại *</label>
                  <Input placeholder="Nhập số điện thoại" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="Nhập địa chỉ email" type="email" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Điểm đi</label>
                  <Input placeholder="Tỉnh/thành phố đi" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Điểm đến</label>
                  <Input placeholder="Tỉnh/thành phố đến" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mô tả hàng hóa</label>
                <Textarea placeholder="Loại hàng, khối lượng, kích thước..." className="min-h-[100px]" />
              </div>

              <Button className="w-full text-lg py-6">Gửi yêu cầu báo giá</Button>

              <p className="text-xs text-muted-foreground text-center">
                Bằng cách gửi form, bạn đồng ý với{" "}
                <a href="#" className="text-primary hover:underline">
                  Chính sách bảo mật
                </a>{" "}
                của chúng tôi
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
