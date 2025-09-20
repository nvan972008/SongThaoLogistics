import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export function HeroSection() {
  return (
    <section
      id="trang-chu"
      className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Kết nối Việt Nam qua
                <span className="text-primary"> Vận tải Đường sắt </span>
                Đáng tin cậy
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Với hơn 20 năm kinh nghiệm, SÔNG THAO cung cấp dịch vụ vận tải đường sắt chuyên nghiệp, an toàn và hiệu
                quả cho mọi nhu cầu logistics của bạn.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Nhận báo giá ngay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Tìm hiểu thêm
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">An toàn</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Hỗ trợ</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src={`${publicRuntimeConfig.basePath || ''}/modern-railway-freight-train-in-vietnam-landscape.jpg`}
                alt="Tàu hàng đường sắt SÔNG THAO"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Chuyến hàng thành công</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
