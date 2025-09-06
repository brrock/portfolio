import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export default async function AboutPage() {
	return (
		<div className="container max-w-6xl py-6 lg:py-10">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<div className="flex-1 space-x-4">
					<h1 className="inline-block font-black text-4xl lg:text-5xl">
						About Me
					</h1>
				</div>
			</div>
			<hr className="my-8" />
			<div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
				<div className="min-w-48 max-w-48 flex flex-col gap-2">
					<Avatar className="h-48 w-48">
						<AvatarImage
							src="https://avatars.githubusercontent.com/u/123623302"
							alt={siteConfig.author}
						/>
						<AvatarFallback>BR</AvatarFallback>
					</Avatar>
					<h2 className="text-2xl font-bold text-center break-words">
						{siteConfig.author}
					</h2>
					<p className="text-muted-foreground text-center break-words">
						Software Developer
					</p>
				</div>
				<p className="text-muted-foreground text-lg py-4">
					I'm a teenage fullstack developer from the UK with a passion for creating web applications
					that are both functional and aesthetically pleasing. I always use the
					latest technologies and best practices to ensure that my projects are
					up to date and efficient. I'm also comitted to open source, and I'm
					always looking for ways to contribute to the community.
				</p>
			</div>
		</div>
	);
}
