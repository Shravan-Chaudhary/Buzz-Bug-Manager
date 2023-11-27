export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard/issues/new", "/dashboard/issues/:id+/edit"],
}
