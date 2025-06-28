interface FooterDropdownProps {
  title: string;
  items: { label: string; href: string }[];
}

export default function FooterDropdown({ title, items }: FooterDropdownProps) {
  return (
    <div className="mb-2 group">
      {/* Label + Chevron */}
      <div className="flex items-center gap-1 cursor-pointer text-white group-hover:text-blue-500 transition-colors">
        <p className="mb-0 font-bold text-sm">{title}</p>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown Links */}
      <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
        <ul className="text-sm text-gray-400 space-y-2 mt-2">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
