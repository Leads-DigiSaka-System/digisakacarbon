import Image from "next/image";

// InfographicsSection: Displays two AWD infographics side by side (desktop) / stacked (mobile)
export default function InfographicsSection() {
    return (
        <section className="py-16 sm:py-20">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
                            What is AWD?
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-base font-medium leading-relaxed text-[#424242]/80 sm:text-lg">
                        Alternate Wetting and Drying (AWD) is a water-saving technology for rice production that reduces methane emissions and supports climate-smart, low carbon farming.
                    </p>
                </div>
                <div className="grid items-start gap-8 md:gap-10 md:grid-cols-2">
                    <div className="w-full mx-auto max-w-xl">
                        <div className="overflow-hidden bg-white shadow-md rounded-xl ring-1 ring-forest-green/10">
                            <Image
                                src="/images/test.png"
                                alt="AWD infographic explaining the alternate wetting and drying cycle"
                                width={1200}
                                height={1600}
                                className="object-contain w-full h-auto"
                                priority={false}
                            />
                        </div>
                    </div>
                    <div className="w-full mx-auto max-w-xl">
                        <div className="overflow-hidden bg-white shadow-md rounded-xl ring-1 ring-forest-green/10">
                            <Image
                                src="/images/test1.png"
                                alt="AWD benefits infographic showing emission reduction and water savings"
                                width={1200}
                                height={1600}
                                className="object-contain w-full h-auto"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
