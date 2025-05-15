import dynamic from 'next/dynamic'

const TestimonialSlider = dynamic(() => import('./testimonial-slider'), {
  loading: () => <div>Loading testimonials...</div>,
  ssr: false
}) 