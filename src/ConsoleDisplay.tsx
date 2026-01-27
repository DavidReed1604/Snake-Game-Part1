import "./Display.css";

export default function Display({ output }: { output: string }) {
  return (
    <pre id="output">
      OUTPUT: <br />
    </pre>
  );
}
