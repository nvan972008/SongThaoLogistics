import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, TrendingUp, Globe, Award, Zap } from "lucide-react"

const advantages = [
  {
    icon: Star,
    title: "Đội ngũ chuyên nghiệp",
    description: "Hơn 500 nhân viên có kinh nghiệm lâu năm trong ngành vận tải đường sắt",
    stats: "500+ nhân viên",
  },
  {
    icon: TrendingUp,
    title: "Giao hàng đúng hẹn",
    description: "Tỷ lệ giao hàng đúng thời gian cam kết đạt 98.5%, dẫn đầu thị trường",
    stats: "98.5% đúng hẹn",
  },
  {
    icon: Globe,
    title: "Mạng lưới rộng khắp",
    description: "Phủ sóng 63 tỉnh thành với hơn 200 điểm giao nhận trên toàn quốc",
    stats: "63 tỉnh thành",
  },
  {
    icon: Award,
    title: "Chứng nhận chất lượng",
    description: "Đạt chứng nhận ISO 9001:2015 và nhiều giải thưởng uy tín trong ngành",
    stats: "ISO 9001:2015",
  },
  {
    icon: Zap,
    title: "Công nghệ hiện đại",
    description: "Hệ thống theo dõi GPS và phần mềm quản lý logistics tiên tiến",
    stats: "100% số hóa",
  },
  {
    icon: CheckCircle,
    title: "An toàn tuyệt đối",
    description: "Không có tai nạn nghiêm trọng trong suốt 5 năm qua",
    stats: "0 tai nạn",
  },
]

export function AdvantagesSection() {
  return (
    <section id="uu-diem" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Tại sao chọn SÔNG THAO?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Chúng tôi tự hào là đơn vị vận tải đường sắt hàng đầu Việt Nam với những ưu điểm vượt trội.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <advantage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{advantage.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {advantage.stats}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Hơn 10,000 khách hàng tin tưởng</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Từ các doanh nghiệp nhỏ đến tập đoàn lớn, SÔNG THAO luôn là lựa chọn hàng đầu cho nhu cầu vận tải đường
              sắt.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50,000+</div>
                <div className="text-muted-foreground">Chuyến hàng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                <div className="text-muted-foreground">Hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-muted-foreground">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
