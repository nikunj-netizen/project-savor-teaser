import DeckShell from "@/components/deck/DeckShell";
import SlideCover from "@/components/slides/SlideCover";
import SlideCore from "@/components/slides/SlideCore";
import SlideDark from "@/components/slides/SlideDark";
import SlideClosing from "@/components/slides/SlideClosing";
import SlideLegal from "@/components/slides/SlideLegal";

export default function Home() {
  return (
    <DeckShell totalSlides={5}>
      <SlideCover />
      <SlideCore />
      <SlideDark />
      <SlideClosing />
      <SlideLegal />
    </DeckShell>
  );
}
