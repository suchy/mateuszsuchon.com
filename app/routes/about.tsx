import type { MetaFunction } from "@remix-run/cloudflare";
import { Container } from "~/components/Container";
import { SocialMediaBox } from "~/components/SocialMediaBox";

export const meta: MetaFunction = () => ({
  title: "About me - Mateusz Suchoń",
  // description: attributes.description,
});

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            {/* <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            /> */}
            {/* image */}
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Mateusz Suchoń. I&nbsp;live in Kraków, where I'm simplifying
            problems.
          </h1>

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I've loved coding for a really long time. It always reminds me of
              playing with Lego. Putting things together and seeing them work. I
              created my first website when I was 11 years old. It was created
              in MS Word, but my passion for web projects stayed with me.
            </p>

            <p>
              With coding, I found another interest - problem-solving. Very
              often I'm trying to find a business problem I can solve with code.
              This is a great exercise for creativity and learning new
              technology things. I hope to develop my own product one day.
            </p>

            <p>
              In my career I'm looking for the sweet spot - a perfect mix of
              remote work and a great team, a sense of ownership and freedom,
              working in technologies I'm good at, and learning new things.
            </p>

            <p>
              Besides coding there are a lot of activities in my life: sailing,
              playing samba, diving, walking the dog, biking, gym, traveling and
              food. I have just one life and I want to try everything.
            </p>
          </div>
        </div>

        <SocialMediaBox className="lg:pl-20" />
      </div>
    </Container>
  );
}
