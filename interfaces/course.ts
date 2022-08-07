interface CoursePrice {
  fundraising: boolean
  price: number
  schedule_at: string
}

interface lecture {
  id: number
  username: string
  avatar: string
}

export interface Course {
  id: number
  title: string
  image: string
  fixed_price: number
  fundraising_tickets: number
  consumers: number
  prices: CoursePrice[]
  lectures: lecture[]
}
