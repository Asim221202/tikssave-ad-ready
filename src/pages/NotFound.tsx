import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="mb-4 text-6xl font-bold">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
