import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'
import { Button, Card, Flex } from '@radix-ui/themes'
import Balancer from 'react-wrap-balancer'

export default function Home() {
  return (
    <div className="">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-[var(--gray-6)]  dark:stroke-[var(--gray-a5)] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:[mask-image:radial-gradient(100%_100%_at_top_right,black,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
          <pattern id="hexPattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <polygon points="50,0 50,25 100,75 50,100 0,75 0,25" fill="none"></polygon>{' '}
          </pattern>
          <linearGradient id="grad">
            <stop offset="0%" stop-color="#FF5733" />
            <stop offset="100%" stop-color="#FFC300" />
          </linearGradient>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-[var(--gray-a3)]">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        {/*<rect x="0" y="0" width="100%" height="100%" fill="url(#hexPattern)" />*/}
      </svg>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="pointer-events-none  absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--lime-a10)] to-[var(--sky-a10)]  dark:from-[var(--lime-a7)] dark:to-[var(--sky-a7)]  sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="relative">
          <h1 className="text-center font-heading font-light bg-gradient-to-br from-[var(--gray-12)] via-[var(--gray-11)] to-[var(--gray-10)] bg-clip-text text-transparent pb-36 max-w-5xl leading-10 mx-auto text-3xl tracking-tight sm:text-6xl">
            <Balancer>Software engineer, NLP enthusiast & sports data junkie.</Balancer>
          </h1>
          <div className="flex gap-x-3 max-w-6xl mx-auto">
            <Card className="bg-white  w-[700px] shrink-0 p-8">
              <Flex direction="column" justify="between" className="h-full relative">
                {/*<div className="absolute bottom-0 right-0 w-1/2">*/}
                {/*  <img src="/hero-globe.png" alt="" />*/}
                {/*</div>*/}
                <div className="relative">
                  <div className="flex mb-4">
                    <div className="mr-4 flex-shrink-0">
                      <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                        <img src="/avatar.png" alt="" />
                      </span>
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg">George Bockari</h2>
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-[var(--cyan-a5)] p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-9)]" />
                        </div>
                        <p className="text-sm font-mono font-bold text-[var(--gray-9)]">Available for consulting</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-mono text-xl tracking-wider">
                    Currently freelancing as a product designer and front-end developer. Design advisor to @circular and
                    @acme. Formerly design lead at Untitled.{' '}
                  </p>
                </div>
                <div className="relative">
                  <h2 className="">Based in Atlanta, Georgia USA</h2>
                  <p className="font-mono text-sm text-muted-foreground uppercase">
                    Roswell, GA · 40.6892° N, 74.0445° W
                  </p>
                </div>
              </Flex>
            </Card>
            <div className="w-full aspect-square space-y-3">
              <div className="flex gap-x-3">
                <Card className="basis-3/5 aspect-square flex flex-col justify-between">
                  <Flex direction="column" className="h-full" justify="between">
                    <svg
                      className="h-8 w-8 text-[var(--blue-8)]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M240,72l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12s32-12,48-36c0,0-55.15-32-47.22-120,0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24Z"
                        opacity="0.2"
                      ></path>
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.65,48.65,0,0,0,168.1,40a46.87,46.87,0,0,0-33.74,13.7A47.87,47.87,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.3,47.79,9.57,79.77,22,98.18a110.92,110.92,0,0,0,21.89,24.2C61.43,195.2,37.45,204.41,37.2,204.51a8,8,0,0,0-3.85,11.93c.74,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.68,0,129.72-54.42,135.76-124.44l29.9-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.52-6.25,27.56-17,37.88-32.48a8,8,0,0,0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54,124.11,48,100.38,48,73.09c16,13,45.25,33.18,78.69,38.8A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.89,30.89,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                    </svg>
                    <div>
                      <p className="text-muted-foreground tracking-wider text-sm font-mono">
                        Tweets about Frontend Engineering, Design, AI & the Atlanta Falcons
                      </p>
                    </div>
                  </Flex>
                </Card>
                <div className="basis-2/5 flex flex-col gap-y-3">
                  <Card className="grow">
                    <Flex justify="between" className="h-full" direction="column">
                      <svg
                        className="h-8 w-8 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                          opacity="0.2"
                        ></path>
                        <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                      </svg>
                      <h2 className="text-sm text-muted-foreground tracking-wider font-mono">GitHub</h2>
                    </Flex>
                  </Card>
                  <Card>
                    <Flex align="center" gap="3">
                      <svg
                        className="h-8 w-8 text-[var(--crimson-10)]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path>
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.65,96.18Q211.83,120,208,120a168.58,168.58,0,0,0-43.94,5.84A166.52,166.52,0,0,0,150.61,96a168.32,168.32,0,0,0,38.2-31.55A87.78,87.78,0,0,1,215.65,120.18ZM176.28,54.46A151.75,151.75,0,0,1,142,82.52a169.22,169.22,0,0,0-38.63-39,88,88,0,0,1,73,10.94ZM85.65,50.88a153.13,153.13,0,0,1,42,39.18A151.82,151.82,0,0,1,64,104a154.19,154.19,0,0,1-20.28-1.35A88.39,88.39,0,0,1,85.65,50.88ZM40,128a87.73,87.73,0,0,1,.53-9.64A168.85,168.85,0,0,0,64,120a167.84,167.84,0,0,0,72.52-16.4,150.82,150.82,0,0,1,12.31,27.13,167.11,167.11,0,0,0-24.59,11.6,169.22,169.22,0,0,0-55.07,51.06A87.8,87.8,0,0,1,40,128Zm42,75a152.91,152.91,0,0,1,50.24-46.79,148.81,148.81,0,0,1,20.95-10,152.48,152.48,0,0,1,3.73,33.47,152.93,152.93,0,0,1-3.49,32.56A87.92,87.92,0,0,1,82,203Zm89.06,1.73a170,170,0,0,0,1.86-25,168.69,168.69,0,0,0-4.45-38.47A152.31,152.31,0,0,1,208,136q3.8,0,7.61.19A88.13,88.13,0,0,1,171.06,204.72Z"></path>
                      </svg>
                      <p className="font-mono tracking-wider text-muted-foreground text-sm">Dribble</p>
                    </Flex>
                  </Card>
                </div>
              </div>
              {/*<Card className="py-5">*/}
              {/*  <div className="text-sm text-zinc-800">gbockari@creight.io</div>*/}
              {/*</Card>*/}
              <Button variant="classic" size="4" className="transition-all duration-150 ease-out font-semibold w-full">
                Send me a message
              </Button>
              <div className="flex gap-x-3">
                <Card className="order-last basis-3/5 aspect-square flex flex-col justify-between">
                  <Flex direction="column" className="h-full" justify="between">
                    <svg
                      className="h-8 w-8 text-[var(--purple-10)]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M104,120a24,24,0,1,1,24,24A24,24,0,0,1,104,120Zm39.75,24h-31.5a16.06,16.06,0,0,0-15.76,19.88l12.19,48A16.2,16.2,0,0,0,124.44,224h7.12a16.2,16.2,0,0,0,15.76-12.12l12.19-48A16.06,16.06,0,0,0,143.75,144Z"
                        opacity="0.2"
                      ></path>
                      <path d="M154.2,138.33a32,32,0,1,0-52.4,0,24.18,24.18,0,0,0-8.76,7,23.68,23.68,0,0,0-4.3,20.49l12.18,48A24.18,24.18,0,0,0,124.44,232h7.12a24.18,24.18,0,0,0,23.52-18.15l12.18-48a23.68,23.68,0,0,0-4.3-20.49A24.18,24.18,0,0,0,154.2,138.33ZM128,104a16,16,0,1,1-16,16A16,16,0,0,1,128,104Zm23.75,57.91-12.18,48a8.18,8.18,0,0,1-8,6.09h-7.12a8.18,8.18,0,0,1-8-6.09l-12.18-48a7.71,7.71,0,0,1,1.42-6.73,8.26,8.26,0,0,1,6.58-3.18h31.5a8.26,8.26,0,0,1,6.58,3.18A7.71,7.71,0,0,1,151.75,161.91ZM72,128a56.27,56.27,0,0,0,1.76,14,8,8,0,1,1-15.49,4,72,72,0,1,1,139.46,0,8,8,0,0,1-7.74,6,8.12,8.12,0,0,1-2-.25,8,8,0,0,1-5.75-9.74A56,56,0,1,0,72,128Zm160,0a103.86,103.86,0,0,1-46.49,86.66,8,8,0,0,1-8.86-13.32,88,88,0,1,0-97.31,0A8,8,0,0,1,74.91,216a7.92,7.92,0,0,1-4.42-1.34A104,104,0,1,1,232,128Z"></path>
                    </svg>
                    <Flex direction="column" gap="1">
                      <p color="gray" className="font-mono text-sm text-muted-foreground tracking-wider">
                        Musings and deep dives around all things digital and software related.
                      </p>
                    </Flex>
                  </Flex>
                </Card>
                <div className="basis-2/5 flex flex-col gap-y-3">
                  <Card className="order-last">
                    <Flex align="center" gap="3">
                      <svg
                        className="h-8 w-8 text-[var(--indigo-9)]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z"
                          opacity="0.2"
                        ></path>
                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                      </svg>
                      <h2 className="font-mono text-sm tracking-wider text-muted-foreground">Linkedin</h2>
                    </Flex>
                  </Card>
                  <Card className="grow">
                    <Flex className="h-full" justify="between" direction="column">
                      <svg
                        className="h8 w-8 text-[var(--purple-10)]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z"
                          opacity="0.2"
                        ></path>
                        <path d="M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z"></path>
                      </svg>
                      <p className="font-mono text-sm tracking-wider text-muted-foreground">
                        Collection of tools & resources
                      </p>
                    </Flex>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--lime-10)] to-[var(--sky-10)] opacity-60 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
