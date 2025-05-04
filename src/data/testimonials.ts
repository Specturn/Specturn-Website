export interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Evergreen Solutions',
    quote: 'Working with Specturn transformed our online presence. Their attention to detail and strategic approach to web design helped us increase conversions by 40%.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Innovate Tech',
    quote: 'The SEO services provided by Specturn were game-changing for our business. We now rank on the first page for our most important keywords and have seen a significant increase in quality leads.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    company: 'Bright Horizons Education',
    quote: 'Specturn\'s development team built us a custom web application that streamlined our internal processes. Their technical expertise and commitment to quality exceeded our expectations.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];