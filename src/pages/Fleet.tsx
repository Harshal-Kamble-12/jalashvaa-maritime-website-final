import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import fleetTanker from "@/assets/fleet-tanker.jpg";
import fleetBulk from "@/assets/fleet-bulk.jpg";
import fleetOil from "@/assets/fleet-oil.jpg";

const vessels = [
  {
    image: fleetOil,
    type: "Oil Tankers",
    desc: "Our managed fleet of oil tankers operates across major global trade routes, transporting crude oil and petroleum products with the highest safety and environmental standards.",
    specs: ["VLCC & Aframax", "Double hull construction", "Oil Major approved", "SIRE vetted"],
  },
  {
    image: fleetTanker,
    type: "Chemical Tankers",
    desc: "We manage specialized chemical tankers equipped to handle a wide range of chemical and petrochemical cargoes, meeting the most stringent CDI and industry requirements.",
    specs: ["IMO II & III compliant", "Stainless steel / coated tanks", "CDI inspected", "Multi-grade capable"],
  },
  {
    image: fleetBulk,
    type: "Bulk Carriers",
    desc: "Our bulk carrier fleet efficiently transports dry bulk commodities including iron ore, coal, grains, and minerals across international shipping lanes.",
    specs: ["Handymax to Capesize", "Grab-fitted options", "IACS class maintained", "Global trade routes"],
  },
];

const Fleet = () => {
  return (
    <main>
      <PageHeader title="Our Fleet" subtitle="Diverse vessel types managed with expertise and precision." />

      <SectionWrapper className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-5xl mx-auto">
            {vessels.map((v, i) => (
              <div
                key={v.type}
                className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={v.image}
                    alt={`${v.type} managed by Jalashvaa Maritime`}
                    className="rounded-lg shadow-maritime w-full object-cover aspect-[3/2]"
                    loading="lazy"
                  />
                </div>
                <div className={`space-y-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-heading text-2xl font-bold text-foreground">{v.type}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {v.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Fleet;
