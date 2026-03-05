import Navbar from "@/components/Navbar";
import logo from "@/assets/logo.png";

const DemoHero = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          
          <div className="grid md:grid-cols-2 items-center gap-12">
            
            {/* LEFT - Big Logo */}
            <div className="flex justify-center md:justify-start">
              <img
                src={logo}
                alt="Jalashvaa Logo"
                className="w-64 md:w-80 opacity-90"
              />
            </div>

            {/* RIGHT - Light Content Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Company Policies
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our commitment to safety, compliance, operational excellence,
                and sustainable maritime practices across global operations.
              </p>

              <div className="w-16 h-1 bg-blue-600 rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT BELOW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-lg text-gray-600">
            Your policies content will start here.
          </p>
        </div>
      </section>

    </div>
  );
};

export default DemoHero;