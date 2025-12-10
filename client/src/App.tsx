import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import EzoicScript from "@/components/shared/ezoic-script";
import Home from "@/pages/home";
import Calculators from "@/pages/calculators";
import VerticalJumpCalculator from "@/pages/vertical-jump-calculator";
import StandingReachCalculator from "@/pages/standing-reach-calculator";
import ApproachVsStandingJumpCalculator from "@/pages/approach-vs-standing-jump-calculator";
import JumpFatigueCalculator from "@/pages/jump-fatigue-calculator";
import MaxPotentialJumpCalculator from "@/pages/max-potential-jump-calculator";
import IdealBodyWeightJumpCalculator from "@/pages/ideal-body-weight-jump-calculator";
import VerticalJumpTraining from "@/pages/vertical-jump-training";
import AthleticPerformance from "@/pages/athletic-performance";
import CanIDunk from "@/pages/can-i-dunk";
import HowToDunkABasketball from "@/pages/how-to-dunk-a-basketball";
import DunkingRequirementsByHeight from "@/pages/dunking-requirements-by-height";
import TypesOfDunksExplained from "@/pages/guides/types-of-dunks-explained";
import HowToMeasureVerticalJump from "@/pages/guides/how-to-measure-vertical-jump";
import BeginnerVerticalJumpProgram from "@/pages/blog/beginner-vertical-jump-program";
import PlyometricExercisesForDunking from "@/pages/blog/plyometric-exercises-for-dunking";
import StrengthTrainingForExplosiveness from "@/pages/blog/strength-training-for-explosiveness";
import SixWeekDunkProgram from "@/pages/blog/6-week-dunk-program";
import ShortestNBAPlayersWhoDunked from "@/pages/blog/shortest-nba-players-who-dunked";
import CanA5FootPersonDunk from "@/pages/blog/can-a-5-foot-person-dunk";
import BestExercisesToJumpHigher from "@/pages/guides/best-exercises-to-jump-higher";
import CommonVerticalJumpMistakes from "@/pages/guides/common-vertical-jump-mistakes";
import PrivacyPolicy from "@/pages/privacy-policy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/calculators" component={Calculators} />
      <Route path="/calculators/vertical-jump-calculator" component={VerticalJumpCalculator} />
      <Route path="/calculators/standing-reach-calculator" component={StandingReachCalculator} />
      <Route path="/calculators/approach-vs-standing-jump-calculator" component={ApproachVsStandingJumpCalculator} />
      <Route path="/calculators/jump-fatigue-calculator" component={JumpFatigueCalculator} />
      <Route path="/calculators/max-potential-jump-calculator" component={MaxPotentialJumpCalculator} />
      <Route path="/calculators/ideal-body-weight-jump-calculator" component={IdealBodyWeightJumpCalculator} />
      <Route path="/vertical-jump-training" component={VerticalJumpTraining} />
      <Route path="/athletic-performance" component={AthleticPerformance} />
      <Route path="/can-i-dunk" component={CanIDunk} />
      <Route path="/how-to-dunk-a-basketball" component={HowToDunkABasketball} />
      <Route path="/dunking-requirements-by-height" component={DunkingRequirementsByHeight} />
      <Route path="/guides/types-of-dunks-explained" component={TypesOfDunksExplained} />
      <Route path="/guides/how-to-measure-vertical-jump" component={HowToMeasureVerticalJump} />
      <Route path="/guides/best-exercises-to-jump-higher" component={BestExercisesToJumpHigher} />
      <Route path="/guides/common-vertical-jump-mistakes" component={CommonVerticalJumpMistakes} />
      <Route path="/blog/beginner-vertical-jump-program" component={BeginnerVerticalJumpProgram} />
      <Route path="/blog/plyometric-exercises-for-dunking" component={PlyometricExercisesForDunking} />
      <Route path="/blog/strength-training-for-explosiveness" component={StrengthTrainingForExplosiveness} />
      <Route path="/blog/6-week-dunk-program" component={SixWeekDunkProgram} />
      <Route path="/blog/shortest-nba-players-who-dunked" component={ShortestNBAPlayersWhoDunked} />
      <Route path="/blog/can-a-5-foot-person-dunk" component={CanA5FootPersonDunk} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <EzoicScript />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
