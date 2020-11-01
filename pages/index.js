import Nav from "../components/nav";
import Image from "next/image";
import Watch from "../components/Watch";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <div class="grid grid-cols-7">
          <div class="col-start-2 col-span-1">
            <Watch />
          </div>
          <div class="col-start-4 col-span-1">
            <Watch />
          </div>
          <div class="col-start-6 col-span-1">
            <Watch />
          </div>
          <div class="col-start-1 col-span-1">
            <Watch />
          </div>
          <div class="col-start-3 col-span-1">
            <Watch />
          </div>
          <div class="col-start-5 col-span-1">
            <Watch />
          </div>
          <div class="col-start-7 col-span-1">
            <Watch />
          </div>
          <div class="col-start-2 col-span-1">
            <Watch />
          </div>
          <div class="col-start-6 col-span-1">
            <Watch />
          </div>
          <div class="col-start-1 col-span-1">
            <Watch />
          </div>
          <div class="col-start-3 col-span-1">
            <Watch />
          </div>
          <div class="col-start-5 col-span-1">
            <Watch />
          </div>
          <div class="col-start-7 col-span-1">
            <Watch />
          </div>
        </div>
      </div>
    </div>
  );
}
