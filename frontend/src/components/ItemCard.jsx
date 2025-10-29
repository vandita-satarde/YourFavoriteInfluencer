const ItemCard = ({ title, image, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:border-[#ddacac] hover:border cursor-pointer ">
      <img
        src={image}
        alt={title}
        className="rounded-md mb-3 h-34 lg:h-45 mx-auto "
      />
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-sm mb-3">{description}</p>
      <a
        href={link}
        target="_blank"
        className="text-[#e88585] hover:text-[#d17575] hover:font-bold text-sm font-medium hover-"
      >
        Shop now →
      </a>
    </div>
  );
};

export default ItemCard;
