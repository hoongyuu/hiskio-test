export interface CoursePrice {
  fundraising: boolean
  price: number
  schedule_at: string
}

export interface Lecturer {
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
  lecturers: Lecturer[]
}
