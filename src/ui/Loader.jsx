import { bouncy } from "ldrs";

export default function Spinner() {
  bouncy.register();
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <l-bouncy size="80" speed="1.5" color="#292524"></l-bouncy>
    </div>
  );
}
