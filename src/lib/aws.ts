export const awsRuntime = {
  profile: "dev",
  region: process.env.AWS_REGION ?? "us-east-1"
};

export function assertServerSideAwsUsage() {
  if (typeof window !== "undefined") {
    throw new Error("AWS SDK credentials must only be used on the server.");
  }
}
