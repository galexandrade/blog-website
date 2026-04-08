import Link from 'next/link';
import Image from 'next/image';
import { BookA } from 'lucide-react';

function PDFIcon({ size = 22 }: { size?: number }) {
    return (
        <svg
            height={size}
            width={size}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
        >
            <g>
                <path
                    style={{ fill: '#E9E9E0' }}
                    d="M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074
		c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z"
                />
                <polygon
                    style={{ fill: '#D9D7CA' }}
                    points="37.5,0.151 37.5,12 49.349,12 	"
                />
                <path
                    style={{ fill: '#CC4B4C' }}
                    d="M19.514,33.324L19.514,33.324c-0.348,0-0.682-0.113-0.967-0.326
		c-1.041-0.781-1.181-1.65-1.115-2.242c0.182-1.628,2.195-3.332,5.985-5.068c1.504-3.296,2.935-7.357,3.788-10.75
		c-0.998-2.172-1.968-4.99-1.261-6.643c0.248-0.579,0.557-1.023,1.134-1.215c0.228-0.076,0.804-0.172,1.016-0.172
		c0.504,0,0.947,0.649,1.261,1.049c0.295,0.376,0.964,1.173-0.373,6.802c1.348,2.784,3.258,5.62,5.088,7.562
		c1.311-0.237,2.439-0.358,3.358-0.358c1.566,0,2.515,0.365,2.902,1.117c0.32,0.622,0.189,1.349-0.39,2.16
		c-0.557,0.779-1.325,1.191-2.22,1.191c-1.216,0-2.632-0.768-4.211-2.285c-2.837,0.593-6.15,1.651-8.828,2.822
		c-0.836,1.774-1.637,3.203-2.383,4.251C21.273,32.654,20.389,33.324,19.514,33.324z M22.176,28.198
		c-2.137,1.201-3.008,2.188-3.071,2.744c-0.01,0.092-0.037,0.334,0.431,0.692C19.685,31.587,20.555,31.19,22.176,28.198z
		 M35.813,23.756c0.815,0.627,1.014,0.944,1.547,0.944c0.234,0,0.901-0.01,1.21-0.441c0.149-0.209,0.207-0.343,0.23-0.415
		c-0.123-0.065-0.286-0.197-1.175-0.197C37.12,23.648,36.485,23.67,35.813,23.756z M28.343,17.174
		c-0.715,2.474-1.659,5.145-2.674,7.564c2.09-0.811,4.362-1.519,6.496-2.02C30.815,21.15,29.466,19.192,28.343,17.174z
		 M27.736,8.712c-0.098,0.033-1.33,1.757,0.096,3.216C28.781,9.813,27.779,8.698,27.736,8.712z"
                />
                <path
                    style={{ fill: '#CC4B4C' }}
                    d="M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z"
                />
                <g>
                    <path
                        style={{ fill: '#FFFFFF' }}
                        d="M17.385,53h-1.641V42.924h2.898c0.428,0,0.852,0.068,1.271,0.205
			c0.419,0.137,0.795,0.342,1.128,0.615c0.333,0.273,0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306
			c0,0.511-0.087,0.973-0.26,1.388c-0.173,0.415-0.415,0.764-0.725,1.046c-0.31,0.282-0.684,0.501-1.121,0.656
			s-0.921,0.232-1.449,0.232h-1.217V53z M17.385,44.168v3.992h1.504c0.2,0,0.398-0.034,0.595-0.103
			c0.196-0.068,0.376-0.18,0.54-0.335c0.164-0.155,0.296-0.371,0.396-0.649c0.1-0.278,0.15-0.622,0.15-1.032
			c0-0.164-0.023-0.354-0.068-0.567c-0.046-0.214-0.139-0.419-0.28-0.615c-0.142-0.196-0.34-0.36-0.595-0.492
			c-0.255-0.132-0.593-0.198-1.012-0.198H17.385z"
                    />
                    <path
                        style={{ fill: '#FFFFFF' }}
                        d="M32.219,47.682c0,0.829-0.089,1.538-0.267,2.126s-0.403,1.08-0.677,1.477s-0.581,0.709-0.923,0.937
			s-0.672,0.398-0.991,0.513c-0.319,0.114-0.611,0.187-0.875,0.219C28.222,52.984,28.026,53,27.898,53h-3.814V42.924h3.035
			c0.848,0,1.593,0.135,2.235,0.403s1.176,0.627,1.6,1.073s0.74,0.955,0.95,1.524C32.114,46.494,32.219,47.08,32.219,47.682z
			 M27.352,51.797c1.112,0,1.914-0.355,2.406-1.066s0.738-1.741,0.738-3.09c0-0.419-0.05-0.834-0.15-1.244
			c-0.101-0.41-0.294-0.781-0.581-1.114s-0.677-0.602-1.169-0.807s-1.13-0.308-1.914-0.308h-0.957v7.629H27.352z"
                    />
                    <path
                        style={{ fill: '#FFFFFF' }}
                        d="M36.266,44.168v3.172h4.211v1.121h-4.211V53h-1.668V42.924H40.9v1.244H36.266z"
                    />
                </g>
            </g>
        </svg>
    );
}

function LinkedInIcon({ size = 22 }: { size?: number }) {
    return (
        <svg
            fill="#0b66c2"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 93.06 93.06"
        >
            <g>
                <g>
                    <path
                        d="M11.185,0.08C5.004,0.08,0.001,5.092,0,11.259c0,6.173,5.003,11.184,11.186,11.184c6.166,0,11.176-5.011,11.176-11.184
			C22.362,5.091,17.351,0.08,11.185,0.08z"
                    />
                    <rect x="1.538" y="30.926" width="19.287" height="62.054" />
                    <path
                        d="M69.925,29.383c-9.382,0-15.673,5.144-18.248,10.022h-0.258v-8.479H32.921H32.92v62.053h19.27V62.281
			c0-8.093,1.541-15.932,11.575-15.932c9.89,0,10.022,9.256,10.022,16.451v30.178H93.06V58.942
			C93.06,42.235,89.455,29.383,69.925,29.383z"
                    />
                </g>
            </g>
        </svg>
    );
}

function SevenIcon({ size = 22 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="nav-logo"
        >
            <g clipPath="url(#clip0_1842_112)">
                <path
                    d="M50.079 103.368C50.4861 93.7665 52.0298 85.0212 54.71 77.132C57.4241 69.2429 60.8168 62.4447 64.888 56.7376C68.9592 51.0306 73.4376 46.2131 78.323 42.2853L80.2569 44.6521H39.1885V31.665H90.3331V45.5585C86.228 49.352 82.4451 53.9177 78.9846 59.2555C75.558 64.5597 72.6912 70.9382 70.3842 78.391C68.1111 85.8437 66.8558 94.1693 66.6183 103.368H50.079Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M131.846 66.0912C131.846 102.467 102.358 131.956 65.9813 131.956C29.605 131.956 0.116222 102.467 0.116222 66.0912C0.116222 49.664 6.12999 34.6414 16.0761 23.1048L13.2752 20.304L7.03447 26.5447L0.116211 19.6265L19.5156 0.22706L26.4339 7.14532L20.1934 13.3858L22.9942 16.1866C34.5308 6.24013 49.5538 0.226076 65.9813 0.226076C102.358 0.226076 131.846 29.7149 131.846 66.0912ZM118.346 66.0912C118.346 95.0116 94.9018 118.456 65.9813 118.456C37.0609 118.456 13.6162 95.0116 13.6162 66.0912C13.6162 37.1707 37.0609 13.7261 65.9813 13.7261C94.9018 13.7261 118.346 37.1707 118.346 66.0912Z"
                    fill="#FF6808"
                />
            </g>
            <defs>
                <clipPath id="clip0_1842_112">
                    <rect width="100" height="100" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
import { BlogCard } from '@/app/components/blog/blog-card';
import { getLatestPosts } from '@/app/lib/blog';

export default function Home() {
    const latestPosts = getLatestPosts(3);
    const resources = [
        {
            title: 'Blog posts',
            description:
                'Articles on design systems, component architecture, and front-end development.',
            icon: <BookA size={22} />,
            link: '/blog'
        },
        {
            title: 'Resume',
            description: 'My professional experience and skills at a glance.',
            icon: <PDFIcon size={22} />,
            link: 'https://drive.google.com/file/d/1Ccov2_3eJLFm6pTUVwJqr3USW5G7vl4e/view?usp=sharing'
        },
        {
            title: 'LinkedIn',
            description:
                'Connect with me on LinkedIn and see my professional background.',
            icon: <LinkedInIcon size={22} />,
            link: 'https://www.linkedin.com/in/palexandrade'
        },
        {
            title: 'Sous Chef',
            description:
                "I'm building Sous Chef, 7shifts design system. Check it out!",
            icon: <SevenIcon size={22} />,
            link: 'https://sous-chef.7shifts.software/'
        }
    ];

    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6">
            <section className="mx-auto mb-16 max-w-4xl text-center">
                <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full">
                    <Image
                        src="/assets/profile.png"
                        alt="Alex Andrade"
                        width={128}
                        height={128}
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
                    Hey, I&apos;m a Senior Design Engineer
                </h1>
                <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
                    I specialize in{' '}
                    <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                        Design Systems
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                        Front-end Development
                    </span>
                    , building scalable component libraries and beautiful user
                    experiences.
                </p>
                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
                    This is where I share my learnings, insights, and
                    explorations in modern web development, component
                    architecture, and everything that makes great user
                    interfaces.
                </p>
            </section>

            <section className="mb-24 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {resources.map((item) => (
                    <Link
                        key={item.title}
                        href={item.link ?? '#'}
                        {...(item.link?.startsWith('https') && {
                            target: '_blank',
                            rel: 'noopener noreferrer'
                        })}
                        className="rounded-2xl border border-slate-300/70 bg-slate-100/70 px-6 py-7 transition-colors hover:bg-white dark:border-slate-700 dark:bg-slate-800/70 dark:hover:bg-slate-800"
                    >
                        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-indigo-500 dark:bg-slate-700/60 dark:text-indigo-400">
                            {item.icon}
                        </div>
                        <h2 className="mb-3 text-xl font-bold leading-tight text-slate-900 dark:text-slate-100">
                            {item.title}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            {item.description}
                        </p>
                    </Link>
                ))}
            </section>

            <section>
                <div className="mb-4 flex items-center gap-4">
                    <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100 md:text-6xl">
                        Featured Posts
                    </h2>
                    <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-indigo-600 px-3 text-xl font-semibold !text-white">
                        {latestPosts.length}
                    </span>
                </div>
                <p className="mb-10 text-xl text-slate-600 dark:text-slate-400 md:text-2xl">
                    Latest insights on design systems, component architecture,
                    and front-end development
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {latestPosts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}
