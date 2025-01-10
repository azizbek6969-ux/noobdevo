import React from 'react';

function ListView() {
  return (
    <div className="p-4 bg-gray-100 border rounded">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Lid nomi</th>
            <th className="border p-2">Telefon raqami</th>
            <th className="border p-2">Qayerdan</th>
            <th className="border p-2">Bo‘lim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">yoldoshev jorabek</td>
            <td className="border p-2">+998 (09) 900-90-99</td>
            <td className="border p-2">instagram</td>
            <td className="border p-2">select</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListView;
