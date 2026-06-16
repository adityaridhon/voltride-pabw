import {Button} from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFleetCars } from "@/actions/mobil.actions";
import FleetSlider from "@/components/usercomponents/FleetSlider";

export default async function FleetSection() {
  const result = await getFleetCars();

  if (!result.success || !result.data || result.data.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16 w-full支">
      {/* Render komponen */}
      <FleetSlider cars={result.data} />

      <div className="mt-6 flex justify-center">
        <Link
          href="/product">
          <Button size="lg">
          View More <ArrowUpRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}