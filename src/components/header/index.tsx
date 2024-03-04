import ThumbButtons from '@components/header/thumb-buttons'
import ClosingInBar from '@components/header/closing-in-bar'
import Image from 'next/image'
import NavBar from './navbar'
import useIsMobile from '@hooks/useIsMobile'
import useIsDesktop from '@hooks/useIsDesktop'

export default function Header() {
  const isMobile = useIsMobile()
  const isDesktop = useIsDesktop()

  return (
    <>
      <NavBar />
      <div className="relative pt-1 min-w-[375px] h-[418px] md:min-h-[460px] lg:min-h-[700px] ">
        <Image
          src={`${!isMobile ? '/img/pope-francis.@2x.png' : '/img/pope-francis.png'}`}
          alt="Pope Francis Photo"
          fill
          className="absolute"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="max-h-[600px] md:min-w-[768px]">
          <div className="w-[204px] h-[292px] mt-[70px] ml-3 backdrop-blur-lg bg-black/35 text-white relative md:ml-5 md:mt-[70px] md:min-w-[368px] md:h-[321px] lg:left-[14%] lg:w-[552px] lg:h-[474px] lg:mt-20 lg:mx-0">
            <div className="px-3 py-3 lg:px-6 lg:py-8 md:px-5 md:py-[26.5px]">
              <p className="text-[12px] m-0 font-light whitespace-nowrap md:text-[14px] lg:text-base">
                What's your opinion on
              </p>
              <p className="m-0 text-[36px] md:text-[28px] lg:text-[58px] leading-none">
                Pope Francis?
              </p>
              <p className="w-[180px] lg:w-full text-[15px] leading-4 my-2  font-light max-h-40 line-clamp-6 md:justify-center md:text-[17.5px] md:mt-3 md:leading-5 md:min-w-[325px] md:pb-2 lg:mt-4 lg:mb-4 lg:text-[24px] lg:leading-7 lg:max-w-[85%]">
                He’s talking tough on clergy sexual abuse, or is he just another
                pervert protector? (thumbs down) or a true pedophile punishing
                pontiff? (thumbs up)
              </p>
              {isMobile && (
                <a
                  href="http://wikipedia.com"
                  className="flex font-light text-white md:text-[14px] lg:text-[18px] no-underline"
                >
                  <svg
                    className="w-6 h-4 mr-2"
                    preserveAspectRatio="xMinYMin slice"
                    xmlns="http://www.w3.org/2000/svg"
                    width={isDesktop ? '27' : '21px'}
                    height={isDesktop ? '18' : '15px'}
                    viewBox="0 0 27 18"
                  >
                    <path
                      d="M27 .303c0 .1-.032.2-.09.28a.255.255 0 01-.2.125 2.46 2.46 0 00-1.453.602 5.676 5.676 0 00-1.166 1.952l-6.127 14.533c-.04.135-.152.203-.337.203a.374.374 0 01-.337-.203l-3.436-7.564-3.952 7.564a.374.374 0 01-.337.203.34.34 0 01-.349-.203L3.196 3.262a5.052 5.052 0 00-1.19-1.89A3.161 3.161 0 00.267.708.23.23 0 01.086.6.378.378 0 010 .355C0 .118.064 0 .192 0 .73 0 1.29.025 1.876.075c.544.053 1.056.078 1.536.078.49 0 1.067-.026 1.732-.078C5.839.025 6.456 0 6.994 0c.128 0 .192.118.192.355 0 .235-.04.352-.119.352a2.308 2.308 0 00-1.268.43c-.297.22-.47.581-.463.963.015.263.08.521.192.757l4.975 11.826 2.824-5.614-2.631-5.807A7.637 7.637 0 009.53 1.257a2.274 2.274 0 00-1.382-.55A.208.208 0 017.986.6a.4.4 0 01-.078-.245c0-.237.054-.355.168-.355.494-.002.987.023 1.477.075.46.054.92.08 1.382.078.48 0 .988-.026 1.525-.078C13.013.025 13.558 0 14.094 0c.128 0 .192.118.192.355 0 .235-.038.352-.119.352-1.073.078-1.61.399-1.61.963.047.414.174.814.373 1.175l1.74 3.72 1.732-3.403c.209-.37.333-.786.36-1.215 0-.775-.536-1.188-1.61-1.24-.097 0-.144-.117-.144-.352a.44.44 0 01.071-.24c.05-.077.098-.115.145-.115.385 0 .857.025 1.418.075.536.053.978.078 1.322.078a13.6 13.6 0 001.093-.065A16.806 16.806 0 0120.584 0c.095 0 .142.1.142.303 0 .27-.088.405-.263.405-.54.036-1.061.224-1.508.544a6.937 6.937 0 00-1.423 2.01l-2.308 4.492 3.125 6.702 4.614-11.294c.149-.36.23-.745.24-1.137 0-.828-.537-1.267-1.61-1.317-.097 0-.145-.118-.145-.353 0-.237.071-.355.216-.355.392 0 .857.025 1.394.075.496.053.914.078 1.25.078.409-.003.818-.03 1.224-.078.483-.05.915-.075 1.3-.075.111 0 .168.1.168.303z"
                      fill="#FFF"
                      fillRule="nonzero"
                    />
                  </svg>
                  More information
                </a>
              )}
              <p className="mt-1 text-[12px] font-bold md:mt-3 md:text-xl lg:text-2xl">
                What's Your Veredict?
              </p>
            </div>
            <ThumbButtons />
          </div>
          <ClosingInBar />
        </div>
      </div>
    </>
  )
}
