interface ServiceHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function ServiceHero({ title, subtitle, image }: ServiceHeroProps) {
  return (
    <div className="relative h-[40vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#13161D]/90 via-[#13161D]/70 to-[#13161D]/50" />
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-5 mt-10">
          {title}
          <br />
        </h1>
        <h1 className="text-4xl font-bold">
          <span className="text-[var(--accent)]">{subtitle}</span>
        </h1>
      </div>
    </div>
  );
}