import Image from "next/image";
import heart from "../../../assets/heart.gif";

export default function Date() {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          {/* Заголовок с датой */}
          <h2
            data-aos="zoom-in-up"
            className={`hero-text font-bold text-[30px] md:text-3xl`}
          >
            19 октябрь 2025 жыл
          </h2>
          <h2
            data-aos="zoom-in-up"
            className={`hero-text font-bold text-[30px] mt-[-15px] md:text-3xl`}
          >
            саат 15:00
          </h2>
          {/* Календарь */}
          <div
            data-aos="zoom-in-up"
            className="max-w-[340px] w-[100%] rounded-2xl"
          >
            {/* Шапка */}
            {/* <div className="flex justify-between mb-3">
              <span className={`text-2xl`}>ОКТЯБРЬ</span>
              <span className={`text-2xl`}>2025</span>
            </div> */}

            {/* Дни недели */}
            <div className="grid grid-cols-7 text-center text-[18px] mb-2">
              <span>ПН</span>
              <span>ВТ</span>
              <span>СР</span>
              <span>ЧТ</span>
              <span>ПТ</span>
              <span>СБ</span>
              <span>ВС</span>
            </div>

            {/* Сетка дней */}
            <div className="relative hero-text font-bold grid grid-cols-7 text-center text-[18px] gap-y-3">
              {/* предыдущие дни сентября */}
              <span className="text-gray-300"></span>
              <span className="text-gray-300"></span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>

              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>

              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span>18</span>
              <span className="absolute top-[70px] right-[4px] flex items-center">
                <Image src={heart} alt="heart" />
              </span>
              <span className="z-2 font-bold">19</span>

              <span>20</span>
              <span>21</span>
              <span>22</span>
              <span>23</span>
              <span>24</span>
              <span>25</span>
              <span>26</span>

              <span>27</span>
              <span>28</span>
              <span>29</span>
              <span>30</span>
              <span>31</span>
              {/* ноябрьские дни */}
              <span className="text-gray-300"></span>
              <span className="text-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
