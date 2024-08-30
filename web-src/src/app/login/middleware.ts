// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
//оно должно работать cookies
export function middleware(request: NextRequest) {
    console.log(123);
    
  let cookie = request.cookies.get("user_id");
  console.log(cookie);

//   const response = NextResponse.next();
//   cookie && response.cookies.set("user_id", cookie);
  // Если пользователь пытается попасть на защищенный маршрут без токена
//   return response;
}

export const config = {
  matcher: ['http://localhost:4000/api/user/:path*','/register/:path*'],
}