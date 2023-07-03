import DashbaordLayout from "@/components/layouts/DashboardLayout";
import OpenAiChat from "@/components/chat/OpenAiChat";

const Home = () => {
  return (
    <DashbaordLayout>
      <OpenAiChat />
    </DashbaordLayout>
  );
};

export default Home;
