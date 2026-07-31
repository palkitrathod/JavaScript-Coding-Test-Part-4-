function calculateJsIfElseWeightedScore(passed, failed, skipped)
{

    // Calculate the score
    let score = (passed * 2) - failed + (skipped * 0);
    // Return the final score
    return score;
  }
