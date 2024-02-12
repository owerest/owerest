const NotFound = () => {
  return (
    <div className="text-center mt-[10%]">
    <h1 className="mb-4 text-6xl font-semibold text-purple-500">404</h1>
    <p className="mb-4 text-lg text-gray-500">Essa página não existe!</p>
    <div className="animate-bounce">
      <svg className="mx-auto h-16 w-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg>
    </div>
    <p className="mt-4 text-gray-500">Volte para a página <a href="/" className="text-blue-500">inicial</a>.</p>
  </div>
  );
}

export default NotFound;
