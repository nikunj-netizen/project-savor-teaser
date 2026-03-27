import DeckShell from "@/components/deck/DeckShell";
import SlideCover from "@/components/slides/SlideCover";
import SlideOne from "@/components/slides/SlideOne";
import SlideTwo from "@/components/slides/SlideTwo";
import SlideClosing from "@/components/slides/SlideClosing";
import SlideLegal from "@/components/slides/SlideLegal";

export default function Home() {
  return (
    <DeckShell totalSlides={5}>
      <SlideCover />
      <SlideOne />
      <SlideTwo />
      <SlideClosing />
      <SlideLegal />
    </DeckShell>
  );
}
