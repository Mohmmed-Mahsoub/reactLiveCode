import { Loader2 } from "lucide-react";

const MainLoader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader2 className="h-12 w-12 animate-spin" />
    </div>
  );
};

export default MainLoader;
