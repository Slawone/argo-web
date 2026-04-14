import { AppLevel, DecisionLevel, SiteLevel, Shield, X8 } from '@/ui/svg';

export const Safety = () => {
  return (
    <section className="page-container section-border">
      <div className="grid lg:grid-cols-[4fr_8fr]">
        {/* Левая колонка */}
        <div className="font-light section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14">
          <h2
            className="text-base md:text-xl lg:text-[28px] font-light uppercase leading-none title-color sticky top-30"
          >
            Надежность
          </h2>
        </div>
        {/* Правая колонка */}
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                На уровне приложений
              </div>

              <div className="">
                Коммутация дисковых полок на базе шины Serial Attached SCSI (SAS)
              </div>
              <AppLevel />
            </div>
            <div className="">
              <Shield />
            </div>
          </div>
           <div className="">
            <div className="">
              <div className="">
                На уровне решения
              </div>

              <div className="">
                Без единой точки отказа. Комплекс мер, технологий и средств направленных на защиту и равномерное распределение данных между путями
              </div>
             <DecisionLevel />
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">
                На уровне площадки
              </div>

              <div className="">
                Гибкое горизонтальное масштабирование, расширение до зеттабайтов
              </div>
              <SiteLevel />
            </div>
            <div className="">
              <X8 />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
