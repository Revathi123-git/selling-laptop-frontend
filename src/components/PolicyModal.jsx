export default function PolicyModal({ title, content, onClose }) {
   return (
    <div className="fixed inset-0 bg-white/50 flex justify-center items-center z-50 p-4">
      <div className="bg-black/80 border border-white rounded-lg p-6 max-w-lg w-full shadow-xl">
        <h2 className="text-xl text-white font-semibold mb-4">{title}</h2>

        <div className="mb-3 text-white/90 text-sm space-y-4 whitespace-pre-line max-h-96 overflow-y-auto">
          {content.split('\n').map((line, index) => 
            line.trim() ? <p key={index}>{line}</p> : null
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full border border-white rounded bg-transparent text-white py-2 hover:bg-white hover:text-black transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
