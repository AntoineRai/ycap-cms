import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getFromLocalStorage } from "@/utils/auth";
import jwt, { Jwt, JwtPayload } from "jsonwebtoken";

interface IJWTMail extends JwtPayload {
  mail?: string;
}

const useAuth = (): void => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      let accessToken = getFromLocalStorage("accessToken");
      if (!accessToken) {
        router.push("/");
      }
    };

    checkAuth();
  }, [router]);
};

export default useAuth;
