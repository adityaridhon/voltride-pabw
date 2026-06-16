import RelatedVehicles from "@/components/usercomponents/RelatedVehicles";

interface TechnicalSpecsProps {
  mobil: any;
}

const TechnicalSpecs = ({ mobil }: TechnicalSpecsProps) => {
  return (
    <div className="lg:col-span-7 font-heading ">
      <span className="text-primary font-bold text-[10px] tracking-widest uppercase block mb-2">
        Specifications
      </span>
      <h2 className="text-3xl font-bold text-neutral-900 mb-8">
        Technical Architecture
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Battery Capacity</span>
          <span className="text-sm font-bold text-neutral-900">
            {mobil.battery} kWh 
          </span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Charging (10-80%)</span>
          <span className="text-sm font-bold text-neutral-900">
            {mobil.chargingTime} Minutes</span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Acceleration</span>
          <span className="text-sm font-bold text-neutral-900">
            {mobil.acceleration} seconds (0-100 mph)
          </span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Seat</span>
          <span className="text-sm font-bold text-neutral-900">
            {mobil.seat}
          </span>
        </div>
      </div>

      <RelatedVehicles currentMobilId={mobil.id} />
    </div>
  );
};

export default TechnicalSpecs;
