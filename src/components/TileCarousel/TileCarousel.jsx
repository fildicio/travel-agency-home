import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './TileCarousel.less'
import Heading from "../Headings/Heading.jsx"
import Paragraph from "../Paragraph/Paragraph.jsx"
import LinkList from "../LinkList/LinkList.jsx"
import { tiles } from '../../content.js'

export default function TileCarousel() {
    return (
        <section className="tile-carousel" aria-label="Destinations">
            <button type="button" className="tile-carousel__arrow tile-carousel__arrow--prev" aria-label="Previous slide">
                <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                    <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <Swiper
                className="tile-carousel__swiper"
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    600: { slidesPerView: 2 },
                    1000: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                }}
                navigation={{
                    prevEl: ".tile-carousel__arrow--prev",
                    nextEl: ".tile-carousel__arrow--next",
                }}
                pagination={{ clickable: true }}
            >
                {tiles.map((tile, index) => (
                    <SwiperSlide key={`${tile.heading}-${index}`}>
                        <article className="tile">
                            <img className="tile__img" src={tile.src} alt="" />
                            <div className="tile__body">
                                <Heading level={3} variant="card" content={tile.heading} />
                                <Paragraph variant="dark" content={tile.text} />
                                <LinkList items={tile.links} />
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button type="button" className="tile-carousel__arrow tile-carousel__arrow--next" aria-label="Next slide">
                <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </section>
    )
}
