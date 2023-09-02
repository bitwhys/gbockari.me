import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'
import { Button, Card, Flex, Heading, Text } from '@radix-ui/themes'

export default function Home() {
  return (
    <div className="">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-[var(--gray-6)] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
            <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" />
          </pattern>
          <linearGradient id="grad">
            <stop offset="0%" stop-color="#FF5733" />
            <stop offset="100%" stop-color="#FFC300" />
          </linearGradient>
        </defs>
        {/*<svg x="50%" y={-1} className="overflow-visible fill-gray-50">*/}
        {/*  <path*/}
        {/*    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"*/}
        {/*    strokeWidth={0}*/}
        {/*  />*/}
        {/*</svg>*/}
        {/*<rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />*/}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#93C926] to-[#8AE8FF] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-20">
          <h1 className="text-center pb-36 max-w-3xl leading-10 mx-auto text-4xl tracking-tight text-gray-900 sm:text-7xl">
            Software engineer, NLP enthusiast & sports data junkie.
          </h1>
          <div className="flex gap-x-3 max-w-6xl mx-auto">
            <Card className="bg-white  w-[700px] shrink-0 p-4">
              <Flex direction="column" justify="between" className="h-full relative">
                <div className="absolute bottom-0 right-0 w-1/2">
                  <img src="/hero-globe.png" alt="" />
                </div>
                <div className="relative">
                  <div className="flex mb-4">
                    <div className="mr-4 flex-shrink-0">
                      <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold">George Bockari</h4>
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">Available for freelance projects</p>
                      </div>
                    </div>
                  </div>
                  <Text className="font-medium font-mono" color="gray" size="4">
                    Currently freelancing as a product designer and front-end developer. Design advisor to @circular and
                    @acme. Formerly design lead at Untitled.{' '}
                  </Text>
                </div>
                <div className="relative">
                  <div className="font-medium">Based in Atlanta, Georgia USA</div>
                  <div className="text-sm font-mono"> NYC, USA · 40.6892° N, 74.0445° W</div>
                </div>
              </Flex>
            </Card>
            <div className="w-full aspect-square space-y-3">
              <div className="flex gap-x-3">
                <Card className="basis-3/5 aspect-square flex flex-col justify-between">
                  <Flex direction="column" className="h-full" justify="between">
                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M251.09,67.41A12,12,0,0,0,240,60H211.82a52.73,52.73,0,0,0-43.67-24,50.85,50.85,0,0,0-36.6,14.85A51.87,51.87,0,0,0,116,88v.78c-36.83-11.57-66.38-40.9-66.7-41.23a12,12,0,0,0-20.47,7.38C22.52,125.1,53.48,162.72,70.89,178.05,56.4,192.83,36,200.68,35.8,200.76A12,12,0,0,0,30,218.66C32,221.55,43.44,236,80,236c72.25,0,132.7-55.26,139.6-126.63l28.88-28.88A12,12,0,0,0,251.09,67.41ZM199.52,95.52a11.93,11.93,0,0,0-3.49,7.72C192.14,164.23,141.18,212,80,212a90.78,90.78,0,0,1-12.49-.79C78,204.55,89.72,195.07,98,182.66a12,12,0,0,0-3.9-17c-.12-.07-12.33-7.49-23.43-24.42s-17.26-37-18.46-59.78C69.37,94.4,96,110.79,126,115.84A12,12,0,0,0,140,104V88a28,28,0,0,1,8.41-20.07A27.07,27.07,0,0,1,167.86,60a28.83,28.83,0,0,1,25.82,16.81,12,12,0,0,0,11,7.19H211Z"></path>
                    </svg>
                    <div>
                      <Heading size="4" className="text-sm font-mono">
                        Twitter
                      </Heading>
                      <Text color="gray" className="">
                        Tweets about software, design & the Falcons
                      </Text>
                    </div>
                  </Flex>
                </Card>
                <div className="basis-2/5 flex flex-col gap-y-3 bg-white">
                  <Card className="grow">
                    <Flex justify="between" className="h-full" direction="column">
                      <svg
                        className="h-8 w-8 text-[var(--gray-10)]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path>
                      </svg>
                      <Text className="font-mono">GitHub</Text>
                    </Flex>
                  </Card>
                  <Card>
                    <Flex align="center" gap="3">
                      <svg
                        className="h-8 w-8 text-[var(--gray-10)]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm83.13,96c-1,0-2.08,0-3.12,0a172.63,172.63,0,0,0-41.39,5.06A171.26,171.26,0,0,0,156,97.39,172.34,172.34,0,0,0,188.9,70.24,83.72,83.72,0,0,1,211.13,116ZM170,55.3a148.53,148.53,0,0,1-27,21.88,173.29,173.29,0,0,0-30.58-31.71A83.52,83.52,0,0,1,170,55.3Zm-84.46.27a149.23,149.23,0,0,1,35.9,32.87A147.73,147.73,0,0,1,64,100c-5,0-10-.26-14.94-.75A84.49,84.49,0,0,1,85.53,55.57ZM44,128c0-1.73.07-3.44.17-5.14A175.15,175.15,0,0,0,64,124a171.8,171.8,0,0,0,70.84-15.22,145.82,145.82,0,0,1,8.92,19.65,170.71,170.71,0,0,0-21.52,10.44,173,173,0,0,0-53.68,48.44A83.77,83.77,0,0,1,44,128Zm43.77,73.72a149,149,0,0,1,46.46-42.06,147.2,147.2,0,0,1,16-7.94,148.52,148.52,0,0,1,2.67,28A148.66,148.66,0,0,1,150,209.06a83.81,83.81,0,0,1-62.22-7.34Zm88.29-4.89c.56-5.68.86-11.4.86-17.14a172.57,172.57,0,0,0-3.72-35.54A148.85,148.85,0,0,1,208,140c1,0,2.07,0,3.11,0A84.07,84.07,0,0,1,176.06,196.83Z"></path>
                      </svg>
                      <Text className="font-mono">Dribble</Text>
                    </Flex>
                  </Card>
                </div>
              </div>
              {/*<Card className="py-5">*/}
              {/*  <div className="text-sm text-zinc-800">gbockari@creight.io</div>*/}
              {/*</Card>*/}
              <Button variant="classic" size="4" className="w-full">
                Send me a message
              </Button>
              <div className="flex gap-x-3">
                <Card className="order-last basis-3/5 aspect-square flex flex-col justify-between">
                  <Flex direction="column" className="h-full" justify="between">
                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M168,12A75.9,75.9,0,0,0,92.49,96.33L23.91,189.85a19.89,19.89,0,0,0,2,26l14.29,14.29a19.89,19.89,0,0,0,26,2l93.52-68.58A76,76,0,1,0,168,12Zm52,76a51.66,51.66,0,0,1-7.75,27.27L140.74,43.75A52,52,0,0,1,220,88ZM54.72,210.71l-9.43-9.43,56.19-76.63a76.46,76.46,0,0,0,29.87,29.87ZM116,88a51.63,51.63,0,0,1,7.75-27.27l71.51,71.51A52,52,0,0,1,116,88Z"></path>
                    </svg>
                    <div>
                      <Heading size="4" className="text-sm font-mono">
                        Podcast
                      </Heading>
                      <Text color="gray" className="">
                        Tweets about software, design & the Falcons
                      </Text>
                    </div>
                  </Flex>
                </Card>
                <div className="basis-2/5 flex flex-col gap-y-3">
                  <Card className="order-last items-center space-x-4">
                    <Flex align="center" gap="3">
                      <svg
                        className="h-8 w-8 text-[var(--gray-10)]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
                      </svg>
                      <Text size="4" className="">
                        Linkedin
                      </Text>
                    </Flex>
                  </Card>
                  <Card className="grow p-3 flex flex-col justify-between gap-y-4">
                    <Flex className="h-full" justify="between" direction="column">
                      <svg
                        className="h8 w-8 text-[var(--gray-10)]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M87.5,151.52l64-64a12,12,0,0,1,17,17l-64,64a12,12,0,0,1-17-17Zm131-114a60.08,60.08,0,0,0-84.87,0L103.51,67.61a12,12,0,0,0,17,17l30.07-30.06a36,36,0,0,1,50.93,50.92L171.4,135.52a12,12,0,1,0,17,17l30.08-30.06A60.09,60.09,0,0,0,218.45,37.55ZM135.52,171.4l-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z"></path>
                      </svg>
                      <Text size="4" className="">
                        Uses
                      </Text>
                    </Flex>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#93C926] to-[#8AE8FF] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
