import DeckShell from "@/components/deck/DeckShell";
import SlideCover from "@/components/slides/SlideCover";
import SlideCondensed from "@/components/slides/SlideCondensed";
import SlideClosing from "@/components/slides/SlideClosing";
import SlideLegal from "@/components/slides/SlideLegal";

export default function Condensed() {
  return (
    <DeckShell totalSlides={4}>
      <SlideCover />
      <SlideCondensed />
      <SlideClosing />
      <SlideLegal />
    </DeckShell>
  );
}
