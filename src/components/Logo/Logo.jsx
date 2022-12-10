import React from "react";
import "./Logo.scss";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * Renders the SEC logo with an optional drawing animation.
 */
export default class Logo extends React.Component {
	static propTypes = {
		animate: PropTypes.bool,
	};

	render() {
		const transition = {
			duration: this.props.animate ? 1.25 : 0,
			ease: "circOut",
		};

		const drawLinesAnimation = {
			animate: {
				pathLength: [0, 1],
				pathOffset: [1, 0],
			},
			transition: {
				...transition,
				times: [0, 1],
			},
		};

		const drawCirclesAnimation = {
			animate: {
				scale: [0, 1],
			},
			transition: {
				...transition,
				times: [0.15, 0.5],
			},
		};

		const drawTextAnimation = Object.assign({}, drawLinesAnimation, {
			animate: {
				pathLength: [0, 0.37],
				pathOffset: [0.37, 0],
			},
		});

		return (
			<motion.svg {...this.props} viewBox="0 0 3000 3000">
				<motion.path
					{...drawLinesAnimation}
					className="lc"
					d="M1140 440L990 700h-500L330 960H100"
				/>
				<motion.path
					{...drawLinesAnimation}
					className="lc"
					d="M1240 440L1040 780h-180m-110 0h-220L370 1040h-160"
				/>
				<motion.path
					{...drawLinesAnimation}
					className="lc"
					d="M1340 440L1090 860h-500L430 1120h-160"
				/>
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 600h-80L1170 870" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 670h-50L1250 870" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 730L1330 870" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="750" cy="780" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="870" cy="780" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1170" cy="870" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1250" cy="870" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1330" cy="870" />
				<motion.path
					{...drawLinesAnimation}
					className="lc"
					d="M1860 440L2020 700h500L2690 960H2900"
				/>
				<motion.path
					{...drawLinesAnimation}
					className="lc"
					d="M1760 440L1960 780h180m110 0h220L2630 1040h140"
				/>
				<motion.path
					{...drawLinesAnimation}
					className="lc"
					d="M1660 440L1910 860h500L2570 1120h160"
				/>
				<motion.circle {...drawCirclesAnimation} className="le" cx="2240" cy="780" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2130" cy="780" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 600h80L1830 870" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 670h50L1750 870" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 730L1670 870" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1830" cy="870" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1750" cy="870" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1670" cy="870" />
				<motion.path {...drawLinesAnimation} className="lc" d="M650 1020L510 1270H340" />
				<motion.path {...drawLinesAnimation} className="lc" d="M750 1020L560 1350H380" />
				<motion.path {...drawLinesAnimation} className="lc" d="M850 1020L610 1430H420" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="750" cy="1020" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="850" cy="1020" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="380" cy="1350" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="420" cy="1430" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 1020H930" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 1090H950L780 1350" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 1160H1000L870 1350" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 1230H1050L970 1350" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="780" cy="1350" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="870" cy="1350" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="970" cy="1350" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 1020H2090" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 1090H2070L2220 1350" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 1160H2010L2120 1350" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 1230H1950L2020 1350" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2020" cy="1350" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2120" cy="1350" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2220" cy="1350" />
				<motion.path {...drawLinesAnimation} className="lc" d="M2340 1020L2490 1270H2680" />
				<motion.path {...drawLinesAnimation} className="lc" d="M2250 1020L2430 1350H2620" />
				<motion.path {...drawLinesAnimation} className="lc" d="M2160 1020L2370 1430H2590" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2160" cy="1020" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2250" cy="1020" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2620" cy="1350" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2590" cy="1430" />
				<motion.path {...drawLinesAnimation} className="lc" d="M2160 2010L2380 1600H2570" />
				<motion.path {...drawLinesAnimation} className="lc" d="M2250 2010L2430 1680H2580" />
				<motion.path {...drawLinesAnimation} className="lc" d="M2340 2010L2490 1760H2580" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2580" cy="1760" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2570" cy="1600" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2340" cy="2010" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2160" cy="2010" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 2430h-80L1170 2170" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 2360h-50L1250 2170" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 2300L1330 2170" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1170" cy="2170" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1250" cy="2170" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1330" cy="2170" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 2430h80L1820 2170" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 2360h50 L1740 2170" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 2300L1660 2170 " />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1820" cy="2170" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1740" cy="2170" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="1660" cy="2170" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 1800H1050L970 1690" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 1870H1000L870 1690" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 1940H950L770 1690" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1410 2010H930" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="780" cy="1690" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="870" cy="1690" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="970" cy="1690" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 1800H1950L2020 1680" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 1870H2010L2120 1680" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 1940H2070L2220 1680" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1590 2010H2090" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2020" cy="1690" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2120" cy="1690" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2220" cy="1690" />
				<motion.path {...drawLinesAnimation} className="lc" d="M760 2160H600L450 1900H370" />
				<motion.path {...drawLinesAnimation} className="lc" d="M760 2240H550L400 1990H320" />
				<motion.path {...drawLinesAnimation} className="lc" d="M760 2320H480L340 2070H270" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="760" cy="2240" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="760" cy="2320" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="320" cy="1990" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="270" cy="2070" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1320 2580L1090 2160H880" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1240 2580L1040 2240H880" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1140 2580L990 2320H880" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="880" cy="2160" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="880" cy="2320" />
				<motion.path
					{...drawLinesAnimation}
					className="lc"
					d="M2230 2160H2370L2540 1900H2620"
				/>
				<motion.path
					{...drawLinesAnimation}
					className="lc"
					d="M2230 2240H2410L2580 1990H2670"
				/>
				<motion.path
					{...drawLinesAnimation}
					className="lc"
					d="M2230 2320H2460L2620 2070H2720"
				/>
				<motion.circle {...drawCirclesAnimation} className="le" cx="2230" cy="2320" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2230" cy="2240" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2670" cy="1990" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2720" cy="2070" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1660 2580L1910 2160H2120" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1760 2580L1960 2240H2120" />
				<motion.path {...drawLinesAnimation} className="lc" d="M1860 2580L2020 2320H2120" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2120" cy="2160" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="2120" cy="2320" />
				<motion.path {...drawLinesAnimation} className="lc" d="M850 2020L610 1600H450" />
				<motion.path {...drawLinesAnimation} className="lc" d="M760 2010L580 1680H440" />
				<motion.path {...drawLinesAnimation} className="lc" d="M670 2010L520 1760H420" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="450" cy="1600" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="420" cy="1760" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="660" cy="2010" />
				<motion.circle {...drawCirclesAnimation} className="le" cx="850" cy="2010" />
				<motion.path
					{...drawTextAnimation}
					className="lt"
					d="M825.861 1915.14C778.327 1915.14 729.454 1906.513 679.241 1889.26C629.021 1872.013 583.594 1844.99 542.961 1808.19L655.661 1672.49C682.494 1693.957 711.437 1711.397 742.491 1724.81C773.537 1738.23 802.861 1744.94 830.461 1744.94C860.361 1744.94 882.021 1740.34 895.441 1731.14C908.854 1721.94 915.561 1708.907 915.561 1692.04C915.561 1682.84 913.261 1675.173 908.661 1669.04C904.061 1662.907 897.354 1657.157 888.541 1651.79C879.721 1646.423 869.177 1641.247 856.911 1636.26C844.644 1631.28 830.461 1625.723 814.361 1619.59L721.211 1580.49C701.277 1572.823 682.111 1562.663 663.711 1550.01C645.311 1537.363 629.211 1522.413 615.411 1505.16C601.611 1487.913 590.687 1468.173 582.641 1445.94C574.587 1423.707 570.561 1399.173 570.561 1372.34C570.561 1340.14 577.461 1310.047 591.261 1282.06C605.061 1254.08 624.227 1229.547 648.761 1208.46C673.294 1187.38 702.621 1170.707 736.741 1158.44C770.854 1146.173 808.227 1140.04 848.861 1140.04C891.794 1140.04 935.304 1148.09 979.391 1164.19C1023.471 1180.29 1062.761 1205.59 1097.261 1240.09L998.361 1364.29C973.061 1346.657 948.721 1333.24 925.341 1324.04C901.954 1314.84 876.461 1310.24 848.861 1310.24C824.327 1310.24 805.161 1314.457 791.361 1322.89C777.561 1331.323 770.661 1343.973 770.661 1360.84C770.661 1378.473 780.437 1392.08 799.991 1401.66C819.537 1411.247 846.561 1422.557 881.061 1435.59L971.911 1471.24C1018.677 1489.64 1054.711 1515.323 1080.011 1548.29C1105.311 1581.257 1117.961 1623.807 1117.961 1675.94C1117.961 1707.373 1111.444 1737.657 1098.411 1766.79C1085.377 1795.923 1066.404 1821.413 1041.491 1843.26C1016.571 1865.113 986.094 1882.557 950.061 1895.59C914.027 1908.623 872.627 1915.14 825.861 1915.14 ZM 1762.847 1901.34L1268.347 1901.34L1268.347 1153.84L1751.347 1153.84L1751.347 1319.44L1466.147 1319.44L1466.147 1436.74L1709.947 1436.74L1709.947 1602.34L1466.147 1602.34L1466.147 1735.74L1762.847 1735.74L1762.847 1901.34 ZM 2262.833 1915.14C2215.3 1915.14 2169.877 1907.28 2126.563 1891.56C2083.243 1875.847 2045.293 1852.08 2012.713 1820.26C1980.127 1788.447 1954.25 1748.58 1935.083 1700.66C1915.917 1652.747 1906.333 1596.973 1906.333 1533.34C1906.333 1470.473 1916.3 1414.697 1936.233 1366.01C1956.167 1317.33 1982.81 1276.313 2016.163 1242.96C2049.51 1209.613 2087.843 1184.123 2131.163 1166.49C2174.477 1148.857 2219.9 1140.04 2267.433 1140.04C2317.267 1140.04 2361.733 1149.813 2400.833 1169.36C2439.933 1188.913 2472.9 1212.107 2499.733 1238.94L2396.233 1365.44C2377.833 1349.34 2358.86 1336.113 2339.313 1325.76C2319.76 1315.413 2297.333 1310.24 2272.033 1310.24C2249.8 1310.24 2228.91 1315.223 2209.363 1325.19C2189.81 1335.157 2172.56 1349.34 2157.613 1367.74C2142.66 1386.14 2130.777 1408.757 2121.963 1435.59C2113.143 1462.423 2108.733 1492.707 2108.733 1526.44C2108.733 1596.973 2123.493 1651.023 2153.013 1688.59C2182.527 1726.157 2221.433 1744.94 2269.733 1744.94C2298.867 1744.94 2324.743 1738.613 2347.363 1725.96C2369.977 1713.313 2389.333 1698.173 2405.433 1680.54L2508.933 1804.74C2476.733 1841.54 2439.743 1869.14 2397.963 1887.54C2356.177 1905.94 2311.133 1915.14 2262.833 1915.14Z"
				/>
			</motion.svg>
		);
	}
}
