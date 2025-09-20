import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, MapPin, Users, Clock, Shield } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Vận tải hàng hóa",
    description: "Dịch vụ vận chuyển hàng hóa đường sắt an toàn, nhanh chóng với chi phí tối ưu.",
    features: ["Hàng container", "Hàng rời", "Hàng đặc biệt"],
  },
  {
    icon: Package,
    title: "Logistics tổng thể",
    description: "Giải pháp logistics hoàn chỉnh từ kho bãi đến vận chuyển và phân phối.",
    features: ["Quản lý kho", "Đóng gói", "Phân phối"],
  },
  {
    icon: MapPin,
    title: "Vận chuyển liên tỉnh",
    description: "Mạng lưới vận chuyển rộng khắp, kết nối các tỉnh thành trên toàn quốc.",
    features: ["Bắc - Nam", "Đông - Tây", "Vùng sâu vùng xa"],
  },
  {
    icon: Users,
    title: "Tư vấn chuyên nghiệp",
    description: "Đội ngũ chuyên gia tư vấn giải pháp vận tải phù hợp với từng khách hàng.",
    features: ["Tư vấn miễn phí", "Thiết kế tuyến", "Tối ưu chi phí"],
  },
]

export function ServicesSection() {
  return (
    <section id="dich-vu" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Dịch vụ của chúng tôi</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            SÔNG THAO cung cấp đa dạng dịch vụ vận tải đường sắt chuyên nghiệp, đáp ứng mọi nhu cầu của khách hàng.{" "}
            {/* Updated company name */}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4 text-pretty">{service.description}</CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Giao hàng đúng hẹn</h3>
            <p className="text-muted-foreground">Cam kết giao hàng đúng thời gian đã thỏa thuận</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bảo hiểm toàn diện</h3>
            <p className="text-muted-foreground">Hàng hóa được bảo hiểm 100% giá trị</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hỗ trợ 24/7</h3>
            <p className="text-muted-foreground">Đội ngũ chăm sóc khách hàng luôn sẵn sàng</p>
          </div>
        </div>
      </div>
    </section>
  )
}
