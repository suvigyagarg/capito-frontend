import React from "react";

function AboutUs() {
  const content = `Lorem ipsum odor amet, consectetuer adipiscing elit. Non dapibus ac diam et luctus neque rhoncus nibh. Metus faucibus vivamus elementum euismod nostra quisque eleifend. Ridiculus ultricies sem blandit, ut etiam aliquam habitasse. Augue nibh eros accumsan nunc praesent quam felis dui. Iaculis per tristique platea; pharetra egestas proin. Vel platea urna faucibus vivamus scelerisque cursus. Integer mauris elementum mi vivamus vehicula. Laoreet adipiscing nascetur mus luctus parturient ex posuere vel aliquet.

    Ante id quisque vivamus cubilia, felis netus nascetur. Vivamus ultrices egestas varius nec erat iaculis justo. Taciti platea aptent facilisis mauris, suscipit erat. Dis libero auctor accumsan parturient justo venenatis facilisi torquent. Nascetur dis senectus facilisi mattis sem massa. Dignissim vitae erat vivamus bibendum aptent dictumst. Sagittis viverra penatibus orci adipiscing class volutpat sem. Maximus sociosqu sollicitudin tincidunt torquent tristique. Facilisi orci pulvinar consectetur rutrum potenti.`;

  return (
    <main className="flex flex-col items-center self-center px-20 pt-7 pb-40 mt-11 w-full font-bold text-white bg-stone-900 max-w-[1345px] shadow-[10px_8px_50px_rgba(255,255,255,0.25)] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-5xl text-center max-md:text-4xl">About Us</h1>
      <section className="mt-14 mb-0 text-3xl max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        {content}
      </section>
    </main>
  );
}

export default AboutUs;
