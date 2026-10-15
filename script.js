
const form = document.getElementById("threatForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const threat = document.getElementById("threat").value.trim();
  const likelihood = Number(
    document.getElementById("likelihood").value
  );
  const impact = Number(
    document.getElementById("impact").value
  );

  if (!threat) return;

  const score = likelihood * impact;

  let level;
  let control;

  if (score >= 15) {
    level = "HIGH";
    control = "Prioritize access controls, monitoring, and mitigation.";
  } else if (score >= 6) {
    level = "MEDIUM";
    control = "Add validation, logging, and a mitigation plan.";
  } else {
    level = "LOW";
    control = "Document the risk and review it periodically.";
  }

  result.textContent =
    `Threat: ${threat} | Score: ${score}/25 | ` +
    `Risk: ${level}. Recommended action: ${control}`;
});
