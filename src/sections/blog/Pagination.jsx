export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Пагинация"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-color accent-border flex h-9 min-w-9 items-center justify-center rounded-full border px-3 text-sm font-light transition-colors hover:border-[#00B6CC] hover:text-[#00B6CC] disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
      >
        Назад
      </button>

      {pages.map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`flex h-9 min-w-9 items-center justify-center rounded-full border px-3 text-sm font-light transition-colors cursor-pointer ${
            page === currentPage
              ? "accent-color accent-border"
              : "text-color accent-border hover:border-[#00B6CC] hover:text-[#00B6CC]"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-color accent-border flex h-9 min-w-9 items-center justify-center rounded-full border px-3 text-sm font-light transition-colors hover:border-[#00B6CC] hover:text-[#00B6CC] disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
      >
        Вперёд
      </button>
    </nav>
  );
};
