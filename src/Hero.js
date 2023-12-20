import "./Hero.css";

export default function Hero() {
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: `<?xml version="1.0" encoding="UTF-8"?>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1250.36 266.51">
                  <defs>
                    <style>
                      .cls-1 {
                        stroke-width: .49px;
                      }
                
                      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19, .cls-20, .cls-21, .cls-22, .cls-23, .cls-24, .cls-25, .cls-26, .cls-27, .cls-28, .cls-29, .cls-30, .cls-31, .cls-32, .cls-33, .cls-34, .cls-35, .cls-36, .cls-37, .cls-38, .cls-39, .cls-40, .cls-41, .cls-42, .cls-43, .cls-44, .cls-45, .cls-46, .cls-47, .cls-48, .cls-49, .cls-50, .cls-51, .cls-52, .cls-53, .cls-54, .cls-55, .cls-56, .cls-57, .cls-58, .cls-59, .cls-60, .cls-61, .cls-62, .cls-63, .cls-64, .cls-65, .cls-66, .cls-67, .cls-68, .cls-69, .cls-70, .cls-71, .cls-72, .cls-73, .cls-74, .cls-75, .cls-76, .cls-77, .cls-78, .cls-79, .cls-80, .cls-81, .cls-82, .cls-83, .cls-84, .cls-85, .cls-86, .cls-87, .cls-88, .cls-89, .cls-90, .cls-91, .cls-92, .cls-93, .cls-94, .cls-95, .cls-96, .cls-97, .cls-98, .cls-99, .cls-100, .cls-101, .cls-102, .cls-103, .cls-104, .cls-105, .cls-106, .cls-107, .cls-108, .cls-109, .cls-110, .cls-111, .cls-112, .cls-113, .cls-114, .cls-115, .cls-116, .cls-117, .cls-118, .cls-119, .cls-120, .cls-121, .cls-122, .cls-123, .cls-124, .cls-125, .cls-126, .cls-127, .cls-128, .cls-129, .cls-130, .cls-131, .cls-132, .cls-133, .cls-134, .cls-135, .cls-136, .cls-137, .cls-138, .cls-139, .cls-140, .cls-141, .cls-142, .cls-143, .cls-144, .cls-145, .cls-146, .cls-147, .cls-148, .cls-149, .cls-150, .cls-151, .cls-152, .cls-153, .cls-154, .cls-155, .cls-156, .cls-157, .cls-158, .cls-159, .cls-160, .cls-161, .cls-162, .cls-163, .cls-164, .cls-165, .cls-166, .cls-167, .cls-168, .cls-169, .cls-170, .cls-171, .cls-172, .cls-173, .cls-174, .cls-175, .cls-176, .cls-177, .cls-178, .cls-179, .cls-180, .cls-181, .cls-182, .cls-183, .cls-184, .cls-185, .cls-186, .cls-187, .cls-188, .cls-189, .cls-190, .cls-191, .cls-192, .cls-193, .cls-194, .cls-195, .cls-196, .cls-197, .cls-198, .cls-199, .cls-200, .cls-201, .cls-202, .cls-203, .cls-204, .cls-205, .cls-206, .cls-207, .cls-208, .cls-209, .cls-210, .cls-211, .cls-212, .cls-213, .cls-214, .cls-215, .cls-216, .cls-217, .cls-218, .cls-219, .cls-220, .cls-221, .cls-222, .cls-223, .cls-224, .cls-225, .cls-226, .cls-227, .cls-228, .cls-229, .cls-230, .cls-231, .cls-232, .cls-233, .cls-234, .cls-235, .cls-236, .cls-237, .cls-238, .cls-239, .cls-240, .cls-241, .cls-242, .cls-243, .cls-244, .cls-245, .cls-246, .cls-247, .cls-248, .cls-249, .cls-250, .cls-251, .cls-252, .cls-253, .cls-254, .cls-255, .cls-256, .cls-257, .cls-258, .cls-259, .cls-260, .cls-261, .cls-262, .cls-263, .cls-264, .cls-265, .cls-266, .cls-267 {
                        fill: none;
                      }
                
                      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19, .cls-20, .cls-21, .cls-22, .cls-23, .cls-24, .cls-25, .cls-26, .cls-27, .cls-28, .cls-29, .cls-30, .cls-31, .cls-32, .cls-33, .cls-34, .cls-35, .cls-37, .cls-38, .cls-39, .cls-40, .cls-41, .cls-42, .cls-43, .cls-44, .cls-45, .cls-46, .cls-47, .cls-48, .cls-49, .cls-50, .cls-51, .cls-52, .cls-53, .cls-54, .cls-55, .cls-56, .cls-57, .cls-58, .cls-59, .cls-60, .cls-61, .cls-62, .cls-63, .cls-64, .cls-65, .cls-66, .cls-67, .cls-68, .cls-69, .cls-70, .cls-71, .cls-72, .cls-73, .cls-74, .cls-75, .cls-76, .cls-77, .cls-78, .cls-79, .cls-80, .cls-81, .cls-82, .cls-83, .cls-84, .cls-85, .cls-86, .cls-87, .cls-88, .cls-89, .cls-90, .cls-91, .cls-92, .cls-93, .cls-94, .cls-95, .cls-96, .cls-97, .cls-98, .cls-99, .cls-100, .cls-101, .cls-102, .cls-103, .cls-104, .cls-105, .cls-106, .cls-107, .cls-108, .cls-109, .cls-110, .cls-111, .cls-112, .cls-113, .cls-114, .cls-115, .cls-116, .cls-117, .cls-118, .cls-119, .cls-120, .cls-121, .cls-122, .cls-123, .cls-124, .cls-125, .cls-126, .cls-127, .cls-128, .cls-129, .cls-130, .cls-131, .cls-132, .cls-133, .cls-134, .cls-135, .cls-136, .cls-137, .cls-138, .cls-139, .cls-140, .cls-141, .cls-142, .cls-143, .cls-144, .cls-145, .cls-146, .cls-147, .cls-148, .cls-149, .cls-150, .cls-151, .cls-152, .cls-153, .cls-154, .cls-155, .cls-156, .cls-157, .cls-158, .cls-159, .cls-160, .cls-161, .cls-162, .cls-163, .cls-164, .cls-165, .cls-166, .cls-167, .cls-168, .cls-169, .cls-170, .cls-171, .cls-172, .cls-173, .cls-174, .cls-175, .cls-176, .cls-177, .cls-178, .cls-179, .cls-180, .cls-181, .cls-182, .cls-183, .cls-184, .cls-185, .cls-186, .cls-187, .cls-188, .cls-189, .cls-190, .cls-191, .cls-192, .cls-193, .cls-194, .cls-195, .cls-196, .cls-197, .cls-198, .cls-199, .cls-200, .cls-201, .cls-202, .cls-203, .cls-204, .cls-205, .cls-206, .cls-207, .cls-208, .cls-209, .cls-210, .cls-211, .cls-212, .cls-213, .cls-214, .cls-215, .cls-216, .cls-217, .cls-218, .cls-219, .cls-220, .cls-221, .cls-222, .cls-223, .cls-224, .cls-225, .cls-226, .cls-227, .cls-228, .cls-229, .cls-230, .cls-231, .cls-232, .cls-233, .cls-234, .cls-235, .cls-236, .cls-237, .cls-238, .cls-239, .cls-240, .cls-241, .cls-242, .cls-243, .cls-244, .cls-245, .cls-246, .cls-247, .cls-248, .cls-249, .cls-250, .cls-251, .cls-252, .cls-253, .cls-254, .cls-255, .cls-256, .cls-257, .cls-258, .cls-259, .cls-260, .cls-261, .cls-262, .cls-263, .cls-264, .cls-265, .cls-266, .cls-267 {
                        stroke-miterlimit: 10;
                      }
                
                      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19, .cls-20, .cls-21, .cls-22, .cls-23, .cls-24, .cls-25, .cls-26, .cls-27, .cls-28, .cls-29, .cls-30, .cls-31, .cls-32, .cls-33, .cls-34, .cls-35, .cls-37, .cls-38, .cls-39, .cls-40, .cls-41, .cls-42, .cls-43, .cls-44, .cls-46, .cls-47, .cls-48, .cls-49, .cls-50, .cls-51, .cls-52, .cls-53, .cls-54, .cls-55, .cls-56, .cls-57, .cls-58, .cls-59, .cls-60, .cls-61, .cls-62, .cls-63, .cls-64, .cls-65, .cls-66, .cls-67, .cls-68, .cls-69, .cls-70, .cls-71, .cls-72, .cls-73, .cls-74, .cls-75, .cls-76, .cls-77, .cls-78, .cls-79, .cls-80, .cls-81, .cls-82, .cls-83, .cls-84, .cls-85, .cls-86, .cls-87, .cls-88, .cls-89, .cls-90, .cls-91, .cls-92, .cls-93, .cls-94, .cls-95, .cls-96, .cls-97, .cls-98, .cls-99, .cls-100, .cls-101, .cls-102, .cls-103, .cls-104, .cls-105, .cls-106, .cls-107, .cls-108, .cls-109, .cls-110, .cls-111, .cls-112, .cls-113, .cls-114, .cls-115, .cls-116, .cls-117, .cls-118, .cls-119, .cls-120, .cls-121, .cls-122, .cls-123, .cls-124, .cls-125, .cls-126, .cls-127, .cls-128, .cls-129, .cls-130, .cls-131, .cls-132, .cls-133, .cls-134, .cls-135, .cls-136, .cls-137, .cls-138, .cls-139, .cls-140, .cls-141, .cls-142, .cls-143, .cls-144, .cls-145, .cls-146, .cls-147, .cls-148, .cls-149, .cls-150, .cls-151, .cls-152, .cls-153, .cls-154, .cls-155, .cls-156, .cls-157, .cls-158, .cls-159, .cls-160, .cls-161, .cls-162, .cls-163, .cls-164, .cls-165, .cls-166, .cls-167, .cls-168, .cls-169, .cls-170, .cls-171, .cls-172, .cls-173, .cls-174, .cls-175, .cls-176, .cls-177, .cls-178, .cls-179, .cls-180, .cls-181, .cls-182, .cls-183, .cls-184, .cls-185, .cls-186, .cls-187, .cls-188, .cls-189, .cls-190, .cls-191, .cls-192, .cls-193, .cls-194, .cls-195, .cls-196, .cls-198, .cls-199, .cls-200, .cls-201, .cls-202, .cls-203, .cls-204, .cls-205, .cls-206, .cls-207, .cls-208, .cls-209, .cls-210, .cls-211, .cls-212, .cls-213, .cls-214, .cls-215, .cls-216, .cls-217, .cls-218, .cls-219, .cls-220, .cls-221, .cls-222, .cls-223, .cls-224, .cls-225, .cls-226, .cls-227, .cls-228, .cls-229, .cls-230, .cls-231, .cls-232, .cls-233, .cls-234, .cls-235, .cls-236, .cls-237, .cls-238, .cls-239, .cls-240, .cls-241, .cls-242, .cls-243, .cls-244, .cls-245, .cls-246, .cls-247, .cls-248, .cls-249, .cls-250, .cls-251, .cls-252, .cls-253, .cls-254, .cls-255, .cls-256, .cls-257, .cls-258, .cls-259, .cls-260, .cls-261, .cls-262, .cls-263, .cls-264, .cls-265, .cls-266, .cls-267 {
                        stroke: #fff;
                      }
                
                      .cls-2 {
                        stroke-width: .44px;
                      }
                
                      .cls-3 {
                        stroke-width: .32px;
                      }
                
                      .cls-4 {
                        stroke-width: .47px;
                      }
                
                      .cls-5 {
                        stroke-width: .2px;
                      }
                
                      .cls-6 {
                        stroke-width: .43px;
                      }
                
                      .cls-7 {
                        stroke-width: .5px;
                      }
                
                      .cls-8 {
                        stroke-width: .31px;
                      }
                
                      .cls-268 {
                        fill: #f9f6fc;
                      }
                
                      .cls-268, .cls-269, .cls-270, .cls-271, .cls-272, .cls-273, .cls-274, .cls-275, .cls-276, .cls-277, .cls-278, .cls-279, .cls-280, .cls-281, .cls-282, .cls-283, .cls-284, .cls-285, .cls-286, .cls-287, .cls-288, .cls-289, .cls-290 {
                        stroke-width: 0px;
                      }
                
                      .cls-9 {
                        stroke-width: .3px;
                      }
                
                      .cls-10 {
                        stroke-width: .41px;
                      }
                
                      .cls-11 {
                        stroke-width: .24px;
                      }
                
                      .cls-12 {
                        stroke-width: .3px;
                      }
                
                      .cls-13 {
                        stroke-width: .46px;
                      }
                
                      .cls-14 {
                        stroke-width: .34px;
                      }
                
                      .cls-15 {
                        stroke-width: .44px;
                      }
                
                      .cls-269 {
                        fill: url(#linear-gradient);
                      }
                
                      .cls-16 {
                        stroke-width: .33px;
                      }
                
                      .cls-270 {
                        fill: #606060;
                      }
                
                      .cls-17 {
                        stroke-width: .43px;
                      }
                
                      .cls-18 {
                        stroke-width: .34px;
                      }
                
                      .cls-19 {
                        stroke-width: .38px;
                      }
                
                      .cls-271 {
                        fill: #525251;
                      }
                
                      .cls-20 {
                        stroke-width: .44px;
                      }
                
                      .cls-21 {
                        stroke-width: .45px;
                      }
                
                      .cls-22 {
                        stroke-width: .45px;
                      }
                
                      .cls-23 {
                        stroke-width: .25px;
                      }
                
                      .cls-24 {
                        stroke-width: .45px;
                      }
                
                      .cls-25 {
                        stroke-width: .21px;
                      }
                
                      .cls-26 {
                        stroke-width: .25px;
                      }
                
                      .cls-27 {
                        stroke-width: .21px;
                      }
                
                      .cls-28 {
                        stroke-width: .2px;
                      }
                
                      .cls-29 {
                        stroke-width: .26px;
                      }
                
                      .cls-30 {
                        stroke-width: .32px;
                      }
                
                      .cls-31 {
                        stroke-width: .41px;
                      }
                
                      .cls-32 {
                        stroke-width: .33px;
                      }
                
                      .cls-33 {
                        stroke-width: .48px;
                      }
                
                      .cls-34 {
                        stroke-width: .34px;
                      }
                
                      .cls-35 {
                        stroke-width: .38px;
                      }
                
                      .cls-36 {
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: .5px;
                      }
                
                      .cls-36, .cls-45, .cls-197 {
                        stroke: #e76a34;
                      }
                
                      .cls-37 {
                        stroke-width: .34px;
                      }
                
                      .cls-38 {
                        stroke-width: .42px;
                      }
                
                      .cls-39 {
                        stroke-width: .39px;
                      }
                
                      .cls-40 {
                        stroke-width: .35px;
                      }
                
                      .cls-41 {
                        stroke-width: .48px;
                      }
                
                      .cls-42 {
                        stroke-width: .23px;
                      }
                
                      .cls-43 {
                        stroke-width: .44px;
                      }
                
                      .cls-44 {
                        stroke-width: .27px;
                      }
                
                      .cls-45 {
                        stroke-width: 3px;
                      }
                
                      .cls-46 {
                        stroke-width: .35px;
                      }
                
                      .cls-47 {
                        stroke-width: .38px;
                      }
                
                      .cls-48 {
                        stroke-width: .37px;
                      }
                
                      .cls-272 {
                        fill: #e76a34;
                      }
                
                      .cls-49 {
                        stroke-width: .38px;
                      }
                
                      .cls-50 {
                        stroke-width: .37px;
                      }
                
                      .cls-51 {
                        stroke-width: .24px;
                      }
                
                      .cls-52 {
                        stroke-width: .29px;
                      }
                
                      .cls-53 {
                        stroke-width: .33px;
                      }
                
                      .cls-54 {
                        stroke-width: .32px;
                      }
                
                      .cls-55 {
                        stroke-width: .27px;
                      }
                
                      .cls-56 {
                        stroke-width: .27px;
                      }
                
                      .cls-57 {
                        stroke-width: .24px;
                      }
                
                      .cls-58 {
                        stroke-width: .32px;
                      }
                
                      .cls-59 {
                        stroke-width: .22px;
                      }
                
                      .cls-273 {
                        fill: #3c4043;
                      }
                
                      .cls-60 {
                        stroke-width: .3px;
                      }
                
                      .cls-61 {
                        stroke-width: .2px;
                      }
                
                      .cls-62 {
                        stroke-width: .38px;
                      }
                
                      .cls-63 {
                        stroke-width: .44px;
                      }
                
                      .cls-64 {
                        stroke-width: .45px;
                      }
                
                      .cls-65 {
                        stroke-width: .22px;
                      }
                
                      .cls-66 {
                        stroke-width: .29px;
                      }
                
                      .cls-67 {
                        stroke-width: .42px;
                      }
                
                      .cls-68 {
                        stroke-width: .47px;
                      }
                
                      .cls-69 {
                        stroke-width: .4px;
                      }
                
                      .cls-70 {
                        stroke-width: .38px;
                      }
                
                      .cls-71 {
                        stroke-width: .45px;
                      }
                
                      .cls-274 {
                        fill: #080b0c;
                      }
                
                      .cls-72 {
                        stroke-width: .38px;
                      }
                
                      .cls-73 {
                        stroke-width: .21px;
                      }
                
                      .cls-74 {
                        stroke-width: .21px;
                      }
                
                      .cls-75 {
                        stroke-width: .32px;
                      }
                
                      .cls-76 {
                        stroke-width: .37px;
                      }
                
                      .cls-77 {
                        stroke-width: .39px;
                      }
                
                      .cls-78 {
                        stroke-width: .39px;
                      }
                
                      .cls-79 {
                        stroke-width: .46px;
                      }
                
                      .cls-80 {
                        stroke-width: .35px;
                      }
                
                      .cls-275 {
                        fill: #fafaf8;
                      }
                
                      .cls-81 {
                        stroke-width: .33px;
                      }
                
                      .cls-82 {
                        stroke-width: .33px;
                      }
                
                      .cls-83 {
                        stroke-width: .36px;
                      }
                
                      .cls-84 {
                        stroke-width: .47px;
                      }
                
                      .cls-85 {
                        stroke-width: .29px;
                      }
                
                      .cls-86 {
                        stroke-width: .34px;
                      }
                
                      .cls-87 {
                        stroke-width: .23px;
                      }
                
                      .cls-276 {
                        fill: #ff0;
                      }
                
                      .cls-88 {
                        stroke-width: .35px;
                      }
                
                      .cls-277 {
                        fill: #67c2e9;
                      }
                
                      .cls-89 {
                        stroke-width: .26px;
                      }
                
                      .cls-90 {
                        stroke-width: .31px;
                      }
                
                      .cls-91 {
                        stroke-width: .4px;
                      }
                
                      .cls-92 {
                        stroke-width: .22px;
                      }
                
                      .cls-93 {
                        stroke-width: .46px;
                      }
                
                      .cls-94 {
                        stroke-width: .43px;
                      }
                
                      .cls-95 {
                        stroke-width: .35px;
                      }
                
                      .cls-96 {
                        stroke-width: .35px;
                      }
                
                      .cls-97 {
                        stroke-width: .49px;
                      }
                
                      .cls-98 {
                        stroke-width: .3px;
                      }
                
                      .cls-99 {
                        stroke-width: .2px;
                      }
                
                      .cls-100 {
                        stroke-width: .26px;
                      }
                
                      .cls-101 {
                        stroke-width: .39px;
                      }
                
                      .cls-102 {
                        stroke-width: .47px;
                      }
                
                      .cls-103 {
                        stroke-width: .26px;
                      }
                
                      .cls-104 {
                        stroke-width: .3px;
                      }
                
                      .cls-105 {
                        stroke-width: .4px;
                      }
                
                      .cls-106 {
                        stroke-width: .23px;
                      }
                
                      .cls-107 {
                        stroke-width: .21px;
                      }
                
                      .cls-108 {
                        stroke-width: .36px;
                      }
                
                      .cls-109 {
                        stroke-width: .49px;
                      }
                
                      .cls-110 {
                        stroke-width: .25px;
                      }
                
                      .cls-111 {
                        stroke-width: .38px;
                      }
                
                      .cls-112 {
                        stroke-width: .42px;
                      }
                
                      .cls-113 {
                        stroke-width: .23px;
                      }
                
                      .cls-114 {
                        stroke-width: .39px;
                      }
                
                      .cls-115 {
                        stroke-width: .47px;
                      }
                
                      .cls-116 {
                        stroke-width: .26px;
                      }
                
                      .cls-117 {
                        stroke-width: .26px;
                      }
                
                      .cls-118 {
                        stroke-width: .21px;
                      }
                
                      .cls-119 {
                        stroke-width: .45px;
                      }
                
                      .cls-120 {
                        stroke-width: .43px;
                      }
                
                      .cls-121 {
                        stroke-width: .42px;
                      }
                
                      .cls-122 {
                        stroke-width: .46px;
                      }
                
                      .cls-123 {
                        stroke-width: .37px;
                      }
                
                      .cls-278 {
                        fill: #ccc;
                      }
                
                      .cls-124 {
                        stroke-width: .27px;
                      }
                
                      .cls-125 {
                        stroke-width: .42px;
                      }
                
                      .cls-126 {
                        stroke-width: .33px;
                      }
                
                      .cls-127 {
                        stroke-width: .25px;
                      }
                
                      .cls-128 {
                        stroke-width: .5px;
                      }
                
                      .cls-129 {
                        stroke-width: .31px;
                      }
                
                      .cls-130 {
                        stroke-width: .34px;
                      }
                
                      .cls-131 {
                        stroke-width: .43px;
                      }
                
                      .cls-132 {
                        stroke-width: .35px;
                      }
                
                      .cls-133 {
                        stroke-width: .28px;
                      }
                
                      .cls-134 {
                        stroke-width: .28px;
                      }
                
                      .cls-135 {
                        stroke-width: .3px;
                      }
                
                      .cls-136 {
                        stroke-width: .26px;
                      }
                
                      .cls-137 {
                        stroke-width: .34px;
                      }
                
                      .cls-138 {
                        stroke-width: .49px;
                      }
                
                      .cls-139 {
                        stroke-width: .34px;
                      }
                
                      .cls-279 {
                        fill: #fff;
                      }
                
                      .cls-140 {
                        stroke-width: .24px;
                      }
                
                      .cls-141 {
                        stroke-width: .37px;
                      }
                
                      .cls-142 {
                        stroke-width: .35px;
                      }
                
                      .cls-143 {
                        stroke-width: .41px;
                      }
                
                      .cls-144 {
                        stroke-width: .39px;
                      }
                
                      .cls-145 {
                        stroke-width: .45px;
                      }
                
                      .cls-146 {
                        stroke-width: .22px;
                      }
                
                      .cls-147 {
                        stroke-width: .27px;
                      }
                
                      .cls-148 {
                        stroke-width: .3px;
                      }
                
                      .cls-149 {
                        stroke-width: .46px;
                      }
                
                      .cls-150 {
                        stroke-width: .43px;
                      }
                
                      .cls-151 {
                        stroke-width: .28px;
                      }
                
                      .cls-152 {
                        stroke-width: .39px;
                      }
                
                      .cls-280 {
                        fill: #1b3572;
                      }
                
                      .cls-153 {
                        stroke-width: .3px;
                      }
                
                      .cls-154 {
                        stroke-width: .23px;
                      }
                
                      .cls-155 {
                        stroke-width: .22px;
                      }
                
                      .cls-156 {
                        stroke-width: .23px;
                      }
                
                      .cls-157 {
                        stroke-width: .37px;
                      }
                
                      .cls-158 {
                        stroke-width: .21px;
                      }
                
                      .cls-159 {
                        stroke-width: .28px;
                      }
                
                      .cls-281 {
                        fill: #aa1d2a;
                      }
                
                      .cls-160 {
                        stroke-width: .36px;
                      }
                
                      .cls-161 {
                        stroke-width: .39px;
                      }
                
                      .cls-162 {
                        stroke-width: .48px;
                      }
                
                      .cls-163 {
                        stroke-width: .26px;
                      }
                
                      .cls-164 {
                        stroke-width: .3px;
                      }
                
                      .cls-165 {
                        stroke-width: .35px;
                      }
                
                      .cls-166 {
                        stroke-width: .21px;
                      }
                
                      .cls-167 {
                        stroke-width: .42px;
                      }
                
                      .cls-168 {
                        stroke-width: .3px;
                      }
                
                      .cls-282 {
                        fill: #bfcc20;
                      }
                
                      .cls-169 {
                        stroke-width: .2px;
                      }
                
                      .cls-170 {
                        stroke-width: .33px;
                      }
                
                      .cls-171 {
                        stroke-width: .27px;
                      }
                
                      .cls-172 {
                        stroke-width: .22px;
                      }
                
                      .cls-173 {
                        stroke-width: .36px;
                      }
                
                      .cls-174 {
                        stroke-width: .34px;
                      }
                
                      .cls-175 {
                        stroke-width: .37px;
                      }
                
                      .cls-283 {
                        fill: #3b95c5;
                      }
                
                      .cls-176 {
                        stroke-width: .47px;
                      }
                
                      .cls-177 {
                        stroke-width: .39px;
                      }
                
                      .cls-178 {
                        stroke-width: .34px;
                      }
                
                      .cls-179 {
                        stroke-width: .35px;
                      }
                
                      .cls-284 {
                        fill: #b4b5b5;
                      }
                
                      .cls-180 {
                        stroke-width: .45px;
                      }
                
                      .cls-181 {
                        stroke-width: .48px;
                      }
                
                      .cls-182 {
                        stroke-width: .45px;
                      }
                
                      .cls-183 {
                        stroke-width: .29px;
                      }
                
                      .cls-184 {
                        stroke-width: .25px;
                      }
                
                      .cls-185 {
                        stroke-width: .22px;
                      }
                
                      .cls-186 {
                        stroke-width: .31px;
                      }
                
                      .cls-187 {
                        stroke-width: .36px;
                      }
                
                      .cls-188 {
                        stroke-width: .44px;
                      }
                
                      .cls-189 {
                        stroke-width: .25px;
                      }
                
                      .cls-190 {
                        stroke-width: .24px;
                      }
                
                      .cls-191 {
                        stroke-width: .39px;
                      }
                
                      .cls-192 {
                        stroke-width: .38px;
                      }
                
                      .cls-193 {
                        stroke-width: .44px;
                      }
                
                      .cls-194 {
                        stroke-width: .47px;
                      }
                
                      .cls-195 {
                        stroke-width: .23px;
                      }
                
                      .cls-196 {
                        stroke-width: .38px;
                      }
                
                      .cls-198 {
                        stroke-width: .41px;
                      }
                
                      .cls-199 {
                        stroke-width: .27px;
                      }
                
                      .cls-200 {
                        stroke-width: .33px;
                      }
                
                      .cls-285 {
                        fill: #405485;
                      }
                
                      .cls-201 {
                        stroke-width: .49px;
                      }
                
                      .cls-202 {
                        stroke-width: .4px;
                      }
                
                      .cls-203 {
                        stroke-width: .29px;
                      }
                
                      .cls-204 {
                        stroke-width: .49px;
                      }
                
                      .cls-205 {
                        stroke-width: .46px;
                      }
                
                      .cls-206 {
                        stroke-width: .21px;
                      }
                
                      .cls-207 {
                        stroke-width: .5px;
                      }
                
                      .cls-208 {
                        stroke-width: .46px;
                      }
                
                      .cls-209 {
                        stroke-width: .23px;
                      }
                
                      .cls-286 {
                        fill: #464d19;
                      }
                
                      .cls-210 {
                        stroke-width: .31px;
                      }
                
                      .cls-211 {
                        stroke-width: .33px;
                      }
                
                      .cls-212 {
                        stroke-width: .41px;
                      }
                
                      .cls-213 {
                        stroke-width: .43px;
                      }
                
                      .cls-214 {
                        stroke-width: .47px;
                      }
                
                      .cls-215 {
                        stroke-width: .47px;
                      }
                
                      .cls-216 {
                        stroke-width: .38px;
                      }
                
                      .cls-217 {
                        stroke-width: .41px;
                      }
                
                      .cls-218 {
                        stroke-width: .28px;
                      }
                
                      .cls-287 {
                        fill: #4ab7ab;
                      }
                
                      .cls-219 {
                        stroke-width: .38px;
                      }
                
                      .cls-288 {
                        fill: #333812;
                      }
                
                      .cls-220 {
                        stroke-width: .39px;
                      }
                
                      .cls-221 {
                        stroke-width: .3px;
                      }
                
                      .cls-222 {
                        stroke-width: .25px;
                      }
                
                      .cls-223 {
                        stroke-width: .27px;
                      }
                
                      .cls-224 {
                        stroke-width: .31px;
                      }
                
                      .cls-225 {
                        stroke-width: .23px;
                      }
                
                      .cls-226 {
                        stroke-width: .25px;
                      }
                
                      .cls-227 {
                        stroke-width: .24px;
                      }
                
                      .cls-228 {
                        stroke-width: .28px;
                      }
                
                      .cls-229 {
                        stroke-width: .22px;
                      }
                
                      .cls-230 {
                        stroke-width: .46px;
                      }
                
                      .cls-231 {
                        stroke-width: .26px;
                      }
                
                      .cls-232 {
                        stroke-width: .47px;
                      }
                
                      .cls-233 {
                        stroke-width: .21px;
                      }
                
                      .cls-234 {
                        stroke-width: .23px;
                      }
                
                      .cls-235 {
                        stroke-width: .36px;
                      }
                
                      .cls-236 {
                        stroke-width: .23px;
                      }
                
                      .cls-237 {
                        stroke-width: .25px;
                      }
                
                      .cls-238 {
                        stroke-width: .44px;
                      }
                
                      .cls-289 {
                        fill: #e8e6e6;
                      }
                
                      .cls-239 {
                        stroke-width: .21px;
                      }
                
                      .cls-240 {
                        stroke-width: .46px;
                      }
                
                      .cls-241 {
                        stroke-width: .48px;
                      }
                
                      .cls-242 {
                        stroke-width: .43px;
                      }
                
                      .cls-243 {
                        stroke-width: .25px;
                      }
                
                      .cls-244 {
                        stroke-width: .24px;
                      }
                
                      .cls-245 {
                        stroke-width: .39px;
                      }
                
                      .cls-246 {
                        stroke-width: .48px;
                      }
                
                      .cls-247 {
                        stroke-width: .37px;
                      }
                
                      .cls-248 {
                        stroke-width: .37px;
                      }
                
                      .cls-249 {
                        stroke-width: .32px;
                      }
                
                      .cls-250 {
                        stroke-width: .36px;
                      }
                
                      .cls-251 {
                        stroke-width: .36px;
                      }
                
                      .cls-252 {
                        stroke-width: .34px;
                      }
                
                      .cls-253 {
                        stroke-width: .31px;
                      }
                
                      .cls-254 {
                        stroke-width: .3px;
                      }
                
                      .cls-255 {
                        stroke-width: .4px;
                      }
                
                      .cls-256 {
                        stroke-width: .24px;
                      }
                
                      .cls-257 {
                        stroke-width: .39px;
                      }
                
                      .cls-290 {
                        fill: #f2f2f2;
                      }
                
                      .cls-258 {
                        stroke-width: .28px;
                      }
                
                      .cls-259 {
                        stroke-width: .31px;
                      }
                
                      .cls-260 {
                        stroke-width: .5px;
                      }
                
                      .cls-261 {
                        stroke-width: .35px;
                      }
                
                      .cls-262 {
                        stroke-width: .36px;
                      }
                
                      .cls-263 {
                        stroke-width: .24px;
                      }
                
                      .cls-264 {
                        stroke-width: .43px;
                      }
                
                      .cls-265 {
                        stroke-width: .44px;
                      }
                
                      .cls-266 {
                        stroke-width: .34px;
                      }
                
                      .cls-267 {
                        stroke-width: .31px;
                      }
                    </style>
                    <linearGradient id="linear-gradient" x1="633.9" y1="223.88" x2="633.9" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#f98c44"/>
                      <stop offset=".51" stop-color="#4e3d76"/>
                      <stop offset="1" stop-color="#202124"/>
                    </linearGradient>
                  </defs>
                  <g id="background">
                    <rect class="cls-269" x="34.78" y="0" width="1198.24" height="223.88"/>
                    <rect class="cls-273" x="1235.61" y="33.62" width="3.32" height="18.95" transform="translate(162.84 658.14) rotate(-31.78)"/>
                    <rect class="cls-273" x="1221.09" y="54.25" width="23.86" height="4.2"/>
                    <rect class="cls-273" x="1215.75" y="58.52" width="34.5" height="185.63"/>
                    <rect class="cls-273" x="1226.41" y="36.75" width="8.77" height="14.24" transform="translate(223.65 -664.96) rotate(33.1)"/>
                    <rect class="cls-273" x="1221.86" y="48.91" width="7.76" height="4.63" transform="translate(189.83 -606.01) rotate(30)"/>
                    <rect class="cls-273" x="1231.1" y="45.02" width="8.05" height="9" transform="translate(537.14 -970.67) rotate(53.33)"/>
                  </g>
                  <g id="sky">
                    <g id="clouds">
                      <path class="cls-290" d="M915.31,44.01c1.17-.71,2.25-1.35,3.31-2.03,9.05-5.76,20.02-3.72,27.24,2.83,1.05.95,1.93,1.13,3.22.71,6.28-2.03,11.2-.26,14.82,5.11.38.57,1.45.95,2.2.94,5.39-.09,8.56,2.36,9.81,7.61.35,1.47-.2,1.97-1.53,1.99-.75.01-1.51.01-2.26.01-48.93,0-97.86,0-146.8,0-.6,0-1.2,0-1.81-.01-1.36-.02-1.81-.55-1.54-2,.92-4.85,4.46-7.93,10.24-7.6.59.03,1.49-.4,1.77-.89,3.3-5.78,9.1-6.71,14.16-5.49.59.14,1.5.03,1.93-.35,3.85-3.38,8.14-4.6,13.15-3.11.46.14,1.36-.35,1.7-.81,5.16-6.96,12.05-10.2,20.66-9.56,5.76.43,10.62,2.93,14.63,7.1.43.45,1.23.92,1.76.83,5.31-.88,9.81.46,13.34,4.71Z"/>
                      <path class="cls-290" d="M742.14,114.94c.77-3.42,2.68-4.74,7.23-5.11.81-3.95,2.88-6.96,6.92-8.29.57-.19,1.16-.41,1.74-.41,1.37,0,1.7-.64,1.82-1.93.56-5.87,3.29-10.32,8.77-12.88,7.32-3.42,15.89-.3,19.33,7.05.28.61.65,1.18,1.04,1.88,4.5-.49,8.12,1.02,10.53,5.1.2.34,1.17.53,1.61.36,6.02-2.27,10.15-.84,13.57,4.65.33.53,1.26.91,1.94.94,3.76.2,6.07,1.96,6.97,5.5.64,2.53.03,3.36-2.54,3.36-6.93.01-13.85,0-20.78,0-18.44,0-36.89.02-55.33.02-.93,0-1.87-.15-2.83-.23Z"/>
                      <path class="cls-290" d="M658.72,94.64c2.52-7.02,7.08-11.91,14.31-13.73,8.96-2.25,16.58.17,22.46,7.41.86,1.07,1.62,1.48,2.98,1.41,4.94-.26,8.87,1.59,11.73,5.75.42.61,1.8.83,2.7.77,4.61-.26,7.75,2.59,7.18,6.84-.71.03-1.44.1-2.18.1-23.72,0-47.45,0-71.17.01-.45,0-.9,0-1.36,0-1.59,0-2.02-.54-1.2-2.08,2.4-4.51,6.2-6.49,11.18-6.49,1.05,0,2.1,0,3.36,0Z"/>
                      <path class="cls-290" d="M1084.74,87.62h-64.25c-.43-3.25,1.87-7.04,4.84-8.6.76-.4,1.61-1.36,1.72-2.16,1.91-13.49,17.08-18.92,27.38-12.13,2.39,1.57,4.15,4.18,5.94,6.52.81,1.05,1.42,1.68,2.83,1.65,4.17-.1,7.3,1.7,9.46,5.33.36.6,1.5,1.02,2.27,1.03,4.42.02,7.67,1.81,9.1,5.3.35.86.43,1.83.7,3.07Z"/>
                      <path class="cls-290" d="M1010.84,112.05c4.18,1.15,5.71,2.43,6.37,5.8h-65.79c-.39-1.75.8-4.1,3.08-4.81,2.33-.73,3.73-2.02,5.14-4.02,1.95-2.77,5.16-3.83,8.61-3.32,1.57.23,2.43-.21,3.21-1.62,5.03-9.08,18.83-9.97,25.21-1.14.43.59,1.65.9,2.48.86,3.44-.17,6.67.21,8.88,3.18,1.09,1.46,1.79,3.21,2.8,5.07Z"/>
                      <path class="cls-290" d="M609.72,122.13c9.42-3.31,15.06,3.54,14.32,9.25h-51.76c-.93-5.05,5.05-9.11,11.08-7.57,1.93-5.88,5.69-9.87,12.03-10.52,6.8-.7,11.38,2.75,14.34,8.84Z"/>
                      <path class="cls-290" d="M721.93,128.43h-24.4c-1.07-3.85.56-6.4,4.36-7.11.72-.13,1.56-.57,1.98-1.14,3.1-4.15,10.95-3.66,12.91,1.6.22.59,1.13,1.1,1.82,1.32,2.69.89,3.46,1.95,3.33,5.33Z"/>
                      <path class="cls-290" d="M812.78,91.3c-.5-2.17.08-3.35,1.95-3.95.6-.19,1.19-.76,1.56-1.31,2.22-3.27,5.96-3.78,8.89-1.21.58.51,1.4.74,2.02,1.22.97.75,2.2,1.44,2.71,2.46.93,1.85.19,2.77-1.89,2.78-5.03.02-10.07,0-15.24,0Z"/>
                    </g>
                    <g id="stars">
                      <g>
                        <g>
                          <path class="cls-279" d="M1205.27,66.47c-.29.1-.35.17-.41.46-.1-.29-.17-.35-.46-.41.29-.1.35-.17.41-.46.1.29.17.35.46.41Z"/>
                          <path class="cls-77" d="M1205.27,66.47c-.29.1-.35.17-.41.46-.1-.29-.17-.35-.46-.41.29-.1.35-.17.41-.46.1.29.17.35.46.41Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1203.63,71.4c-.16-.06-.21-.05-.35.06.06-.16.05-.21-.06-.35.16.06.21.05.35-.06-.06.16-.05.21.06.35Z"/>
                          <path class="cls-155" d="M1203.63,71.4c-.16-.06-.21-.05-.35.06.06-.16.05-.21-.06-.35.16.06.21.05.35-.06-.06.16-.05.21.06.35Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1198.17,25.88c-.17-.07-.23-.06-.37.05.07-.17.06-.23-.05-.37.17.07.23.06.37-.05-.07.17-.06.23.05.37Z"/>
                          <path class="cls-140" d="M1198.17,25.88c-.17-.07-.23-.06-.37.05.07-.17.06-.23-.05-.37.17.07.23.06.37-.05-.07.17-.06.23.05.37Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1195.23,45.31c-.19-.05-.24-.04-.38.1.05-.19.04-.24-.1-.38.19.05.24.04.38-.1-.05.19-.04.24.1.38Z"/>
                          <path class="cls-110" d="M1195.23,45.31c-.19-.05-.24-.04-.38.1.05-.19.04-.24-.1-.38.19.05.24.04.38-.1-.05.19-.04.24.1.38Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1191.25,68.52c.19.23.27.26.56.22-.23.19-.26.27-.22.56-.19-.23-.27-.26-.56-.22.23-.19.26-.27.22-.56Z"/>
                          <path class="cls-70" d="M1191.25,68.52c.19.23.27.26.56.22-.23.19-.26.27-.22.56-.19-.23-.27-.26-.56-.22.23-.19.26-.27.22-.56Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1187.6,21.9c.36.1.46.07.73-.18-.1.36-.07.46.18.73-.36-.1-.46-.07-.73.18.1-.36.07-.46-.18-.73Z"/>
                          <path class="cls-4" d="M1187.6,21.9c.36.1.46.07.73-.18-.1.36-.07.46.18.73-.36-.1-.46-.07-.73.18.1-.36.07-.46-.18-.73Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1181.26,55.43c-.17.04-.21.08-.27.25-.04-.17-.08-.21-.25-.27.17-.04.21-.08.27-.25.04.17.08.21.25.27Z"/>
                          <path class="cls-234" d="M1181.26,55.43c-.17.04-.21.08-.27.25-.04-.17-.08-.21-.25-.27.17-.04.21-.08.27-.25.04.17.08.21.25.27Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1177.3,58.01c-.14-.24-.22-.28-.5-.28.24-.14.28-.22.28-.5.14.24.22.28.5.28-.24.14-.28.22-.28.5Z"/>
                          <path class="cls-262" d="M1177.3,58.01c-.14-.24-.22-.28-.5-.28.24-.14.28-.22.28-.5.14.24.22.28.5.28-.24.14-.28.22-.28.5Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1175.04,63.78c.25-.1.31-.17.35-.43.1.25.17.31.43.35-.25.1-.31.17-.35.43-.1-.25-.17-.31-.43-.35Z"/>
                          <path class="cls-80" d="M1175.04,63.78c.25-.1.31-.17.35-.43.1.25.17.31.43.35-.25.1-.31.17-.35.43-.1-.25-.17-.31-.43-.35Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1171.86,20.94c.28.22.38.24.71.12-.22.28-.24.38-.12.71-.28-.22-.38-.24-.71-.12.22-.28.24-.38.12-.71Z"/>
                          <path class="cls-182" d="M1171.86,20.94c.28.22.38.24.71.12-.22.28-.24.38-.12.71-.28-.22-.38-.24-.71-.12.22-.28.24-.38.12-.71Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1167.63,48.7c-.1-.33-.17-.4-.51-.48.33-.1.4-.17.48-.51.1.33.17.4.51.48-.33.1-.4.17-.48.51Z"/>
                          <path class="cls-193" d="M1167.63,48.7c-.1-.33-.17-.4-.51-.48.33-.1.4-.17.48-.51.1.33.17.4.51.48-.33.1-.4.17-.48.51Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1161.31,59.27c-.11.18-.11.25-.01.44-.18-.11-.25-.11-.44-.01.11-.18.11-.25.01-.44.18.11.25.11.44.01Z"/>
                          <path class="cls-159" d="M1161.31,59.27c-.11.18-.11.25-.01.44-.18-.11-.25-.11-.44-.01.11-.18.11-.25.01-.44.18.11.25.11.44.01Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1158.23,21.31c.19-.05.23-.09.29-.27.05.19.09.23.27.29-.19.05-.23.09-.29.27-.05-.19-.09-.23-.27-.29Z"/>
                          <path class="cls-127" d="M1158.23,21.31c.19-.05.23-.09.29-.27.05.19.09.23.27.29-.19.05-.23.09-.29.27-.05-.19-.09-.23-.27-.29Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1152.41,39.04c.09.24.15.29.4.33-.24.09-.29.15-.33.4-.09-.24-.15-.29-.4-.33.24-.09.29-.15.33-.4Z"/>
                          <path class="cls-82" d="M1152.41,39.04c.09.24.15.29.4.33-.24.09-.29.15-.33.4-.09-.24-.15-.29-.4-.33.24-.09.29-.15.33-.4Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1148.65,72.22c.03.25.07.31.3.41-.25.03-.31.07-.41.3-.03-.25-.07-.31-.3-.41.25-.03.31-.07.41-.3Z"/>
                          <path class="cls-249" d="M1148.65,72.22c.03.25.07.31.3.41-.25.03-.31.07-.41.3-.03-.25-.07-.31-.3-.41.25-.03.31-.07.41-.3Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1145.86,31.84c-.21.25-.22.35-.12.66-.25-.21-.35-.22-.66-.12.21-.25.22-.35.12-.66.25.21.35.22.66.12Z"/>
                          <path class="cls-125" d="M1145.86,31.84c-.21.25-.22.35-.12.66-.25-.21-.35-.22-.66-.12.21-.25.22-.35.12-.66.25.21.35.22.66.12Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1138.51,48.35c-.15.25-.15.33-.02.59-.25-.15-.33-.15-.59-.02.15-.25.15-.33.02-.59.25.15.33.15.59.02Z"/>
                          <path class="cls-48" d="M1138.51,48.35c-.15.25-.15.33-.02.59-.25-.15-.33-.15-.59-.02.15-.25.15-.33.02-.59.25.15.33.15.59.02Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1134.13,57.31c.34-.11.42-.19.5-.54.11.34.19.42.54.5-.34.11-.42.19-.5.54-.11-.34-.19-.42-.54-.5Z"/>
                          <path class="cls-208" d="M1134.13,57.31c.34-.11.42-.19.5-.54.11.34.19.42.54.5-.34.11-.42.19-.5.54-.11-.34-.19-.42-.54-.5Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1130.52,68.75c-.18-.07-.24-.06-.39.06.07-.18.06-.24-.06-.39.18.07.24.06.39-.06-.07.18-.06.24.06.39Z"/>
                          <path class="cls-237" d="M1130.52,68.75c-.18-.07-.24-.06-.39.06.07-.18.06-.24-.06-.39.18.07.24.06.39-.06-.07.18-.06.24.06.39Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1128.19,41.82c.05-.18.04-.23-.09-.36.18.05.23.04.36-.09-.05.18-.04.23.09.36-.18-.05-.23-.04-.36.09Z"/>
                          <path class="cls-256" d="M1128.19,41.82c.05-.18.04-.23-.09-.36.18.05.23.04.36-.09-.05.18-.04.23.09.36-.18-.05-.23-.04-.36.09Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1125.88,44.6c-.07-.18-.12-.22-.31-.25.18-.07.22-.12.25-.31.07.18.12.22.31.25-.18.07-.22.12-.25.31Z"/>
                          <path class="cls-26" d="M1125.88,44.6c-.07-.18-.12-.22-.31-.25.18-.07.22-.12.25-.31.07.18.12.22.31.25-.18.07-.22.12-.25.31Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1119.01,69.16c.26.02.34-.01.49-.22-.02.26.01.34.22.49-.26-.02-.34.01-.49.22.02-.26-.01-.34-.22-.49Z"/>
                          <path class="cls-252" d="M1119.01,69.16c.26.02.34-.01.49-.22-.02.26.01.34.22.49-.26-.02-.34.01-.49.22.02-.26-.01-.34-.22-.49Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1116.69,29.3c.28.1.36.08.59-.1-.1.28-.08.36.1.59-.28-.1-.36-.08-.59.1.1-.28.08-.36-.1-.59Z"/>
                          <path class="cls-72" d="M1116.69,29.3c.28.1.36.08.59-.1-.1.28-.08.36.1.59-.28-.1-.36-.08-.59.1.1-.28.08-.36-.1-.59Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1112.45,46.52c-.2.18-.22.25-.17.52-.18-.2-.25-.22-.52-.17.2-.18.22-.25.17-.52.18.2.25.22.52.17Z"/>
                          <path class="cls-18" d="M1112.45,46.52c-.2.18-.22.25-.17.52-.18-.2-.25-.22-.52-.17.2-.18.22-.25.17-.52.18.2.25.22.52.17Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1105.81,22.07c-.17-.1-.23-.11-.41-.01.1-.17.11-.23.01-.41.17.1.23.11.41.01-.1.17-.11.23-.01.41Z"/>
                          <path class="cls-136" d="M1105.81,22.07c-.17-.1-.23-.11-.41-.01.1-.17.11-.23.01-.41.17.1.23.11.41.01-.1.17-.11.23-.01.41Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1100.89,36.51c.16-.27.17-.36.02-.64.27.16.36.17.64.02-.16.27-.17.36-.02.64-.27-.16-.36-.17-.64-.02Z"/>
                          <path class="cls-69" d="M1100.89,36.51c.16-.27.17-.36.02-.64.27.16.36.17.64.02-.16.27-.17.36-.02.64-.27-.16-.36-.17-.64-.02Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1094.26,50.12c-.26-.24-.37-.27-.71-.17.24-.26.27-.37.17-.71.26.24.37.27.71.17-.24.26-.27.37-.17.71Z"/>
                          <path class="cls-230" d="M1094.26,50.12c-.26-.24-.37-.27-.71-.17.24-.26.27-.37.17-.71.26.24.37.27.71.17-.24.26-.27.37-.17.71Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1092.37,18.63c-.25.14-.3.22-.31.51-.14-.25-.22-.3-.51-.31.25-.14.3-.22.31-.51.14.25.22.3.51.31Z"/>
                          <path class="cls-157" d="M1092.37,18.63c-.25.14-.3.22-.31.51-.14-.25-.22-.3-.51-.31.25-.14.3-.22.31-.51.14.25.22.3.51.31Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1087.83,14.91c-.14.11-.17.16-.14.34-.11-.14-.16-.17-.34-.14.14-.11.17-.16.14-.34.11.14.16.17.34.14Z"/>
                          <path class="cls-113" d="M1087.83,14.91c-.14.11-.17.16-.14.34-.11-.14-.16-.17-.34-.14.14-.11.17-.16.14-.34.11.14.16.17.34.14Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1081.48,41.49c.02-.18,0-.23-.16-.34.18.02.23,0,.34-.16-.02.18,0,.23.16.34-.18-.02-.23,0-.34.16Z"/>
                          <path class="cls-156" d="M1081.48,41.49c.02-.18,0-.23-.16-.34.18.02.23,0,.34-.16-.02.18,0,.23.16.34-.18-.02-.23,0-.34.16Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1078.96,42.73c.11-.36.08-.47-.17-.75.36.11.47.08.75-.17-.11.36-.08.47.17.75-.36-.11-.47-.08-.75.17Z"/>
                          <path class="cls-33" d="M1078.96,42.73c.11-.36.08-.47-.17-.75.36.11.47.08.75-.17-.11.36-.08.47.17.75-.36-.11-.47-.08-.75.17Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1073.69,39.25c-.18-.15-.25-.16-.46-.09.15-.18.16-.25.09-.46.18.15.25.16.46.09-.15.18-.16.25-.09.46Z"/>
                          <path class="cls-135" d="M1073.69,39.25c-.18-.15-.25-.16-.46-.09.15-.18.16-.25.09-.46.18.15.25.16.46.09-.15.18-.16.25-.09.46Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1066.61,28.14c-.24-.16-.33-.17-.6-.05.16-.24.17-.33.05-.6.24.16.33.17.6.05-.16.24-.17.33-.05.6Z"/>
                          <path class="cls-192" d="M1066.61,28.14c-.24-.16-.33-.17-.6-.05.16-.24.17-.33.05-.6.24.16.33.17.6.05-.16.24-.17.33-.05.6Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1063.88,55.89c.1.16.15.18.34.18-.16.1-.18.15-.18.34-.1-.16-.15-.18-.34-.18.16-.1.18-.15.18-.34Z"/>
                          <path class="cls-244" d="M1063.88,55.89c.1.16.15.18.34.18-.16.1-.18.15-.18.34-.1-.16-.15-.18-.34-.18.16-.1.18-.15.18-.34Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1056.64,37.62c.34-.15.41-.24.46-.61.15.34.24.41.61.46-.34.15-.41.24-.46.61-.15-.34-.24-.41-.61-.46Z"/>
                          <path class="cls-246" d="M1056.64,37.62c.34-.15.41-.24.46-.61.15.34.24.41.61.46-.34.15-.41.24-.46.61-.15-.34-.24-.41-.61-.46Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1049.33,44.82c.26-.17.3-.25.29-.55.17.26.25.3.55.29-.26.17-.3.25-.29.55-.17-.26-.25-.3-.55-.29Z"/>
                          <path class="cls-220" d="M1049.33,44.82c.26-.17.3-.25.29-.55.17.26.25.3.55.29-.26.17-.3.25-.29.55-.17-.26-.25-.3-.55-.29Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1043.97,45.34c0,.23.03.3.23.42-.23,0-.3.03-.42.23,0-.23-.03-.3-.23-.42.23,0,.3-.03.42-.23Z"/>
                          <path class="cls-221" d="M1043.97,45.34c0,.23.03.3.23.42-.23,0-.3.03-.42.23,0-.23-.03-.3-.23-.42.23,0,.3-.03.42-.23Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1036.92,27.79c-.26.29-.28.41-.16.77-.29-.26-.41-.28-.77-.16.26-.29.28-.41.16-.77.29.26.41.28.77.16Z"/>
                          <path class="cls-128" d="M1036.92,27.79c-.26.29-.28.41-.16.77-.29-.26-.41-.28-.77-.16.26-.29.28-.41.16-.77.29.26.41.28.77.16Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1032.44,42c.09-.18.09-.24-.02-.41.18.09.24.09.41-.02-.09.18-.09.24.02.41-.18-.09-.24-.09-.41.02Z"/>
                          <path class="cls-29" d="M1032.44,42c.09-.18.09-.24-.02-.41.18.09.24.09.41-.02-.09.18-.09.24.02.41-.18-.09-.24-.09-.41.02Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1029.46,45.57c.35-.09.43-.17.53-.52.09.35.17.43.52.53-.35.09-.43.17-.53.52-.09-.35-.17-.43-.52-.53Z"/>
                          <path class="cls-215" d="M1029.46,45.57c.35-.09.43-.17.53-.52.09.35.17.43.52.53-.35.09-.43.17-.53.52-.09-.35-.17-.43-.52-.53Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1027.88,32.08c-.22-.01-.28.02-.4.2.01-.22-.02-.28-.2-.4.22.01.28-.02.4-.2-.01.22.02.28.2.4Z"/>
                          <path class="cls-151" d="M1027.88,32.08c-.22-.01-.28.02-.4.2.01-.22-.02-.28-.2-.4.22.01.28-.02.4-.2-.01.22.02.28.2.4Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1024.98,52.72c.01.24.05.3.27.42-.24.01-.3.05-.42.27-.01-.24-.05-.3-.27-.42.24-.01.3-.05.42-.27Z"/>
                          <path class="cls-186" d="M1024.98,52.72c.01.24.05.3.27.42-.24.01-.3.05-.42.27-.01-.24-.05-.3-.27-.42.24-.01.3-.05.42-.27Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1019.42,38.92c.27-.18.32-.27.3-.6.18.27.27.32.6.3-.27.18-.32.27-.3.6-.18-.27-.27-.32-.6-.3Z"/>
                          <path class="cls-67" d="M1019.42,38.92c.27-.18.32-.27.3-.6.18.27.27.32.6.3-.27.18-.32.27-.3.6-.18-.27-.27-.32-.6-.3Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1018.32,58.1c.12.34.2.42.56.49-.34.12-.42.2-.49.56-.12-.34-.2-.42-.56-.49.34-.12.42-.2.49-.56Z"/>
                          <path class="cls-84" d="M1018.32,58.1c.12.34.2.42.56.49-.34.12-.42.2-.49.56-.12-.34-.2-.42-.56-.49.34-.12.42-.2.49-.56Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1010.99,22.75c-.12-.29-.2-.35-.52-.4.29-.12.35-.2.4-.52.12.29.2.35.52.4-.29.12-.35.2-.4.52Z"/>
                          <path class="cls-217" d="M1010.99,22.75c-.12-.29-.2-.35-.52-.4.29-.12.35-.2.4-.52.12.29.2.35.52.4-.29.12-.35.2-.4.52Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1007.55,18.45c-.14-.19-.21-.22-.44-.2.19-.14.22-.21.2-.44.14.19.21.22.44.2-.19.14-.22.21-.2.44Z"/>
                          <path class="cls-98" d="M1007.55,18.45c-.14-.19-.21-.22-.44-.2.19-.14.22-.21.2-.44.14.19.21.22.44.2-.19.14-.22.21-.2.44Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M1004.1,43.51c.12.21.18.25.42.25-.21.12-.25.18-.25.42-.12-.21-.18-.25-.42-.25.21-.12.25-.18.25-.42Z"/>
                          <path class="cls-259" d="M1004.1,43.51c.12.21.18.25.42.25-.21.12-.25.18-.25.42-.12-.21-.18-.25-.42-.25.21-.12.25-.18.25-.42Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M997.98,26.36c.15-.07.18-.12.19-.28.07.15.12.18.28.19-.15.07-.18.12-.19.28-.07-.15-.12-.18-.28-.19Z"/>
                          <path class="cls-27" d="M997.98,26.36c.15-.07.18-.12.19-.28.07.15.12.18.28.19-.15.07-.18.12-.19.28-.07-.15-.12-.18-.28-.19Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M994.89,45.72c0-.2-.03-.26-.2-.36.2,0,.26-.03.36-.2,0,.2.03.26.2.36-.2,0-.26.03-.36.2Z"/>
                          <path class="cls-100" d="M994.89,45.72c0-.2-.03-.26-.2-.36.2,0,.26-.03.36-.2,0,.2.03.26.2.36-.2,0-.26.03-.36.2Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M988.24,28.26c.22-.08.26-.14.3-.37.08.22.14.26.37.3-.22.08-.26.14-.3.37-.08-.22-.14-.26-.37-.3Z"/>
                          <path class="cls-148" d="M988.24,28.26c.22-.08.26-.14.3-.37.08.22.14.26.37.3-.22.08-.26.14-.3.37-.08-.22-.14-.26-.37-.3Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M986.7,28.75c.12-.11.13-.15.1-.31.11.12.15.13.31.1-.12.11-.13.15-.1.31-.11-.12-.15-.13-.31-.1Z"/>
                          <path class="cls-99" d="M986.7,28.75c.12-.11.13-.15.1-.31.11.12.15.13.31.1-.12.11-.13.15-.1.31-.11-.12-.15-.13-.31-.1Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M985.21,51.91c.21.12.29.12.5,0-.12.21-.12.29,0,.5-.21-.12-.29-.12-.5,0,.12-.21.12-.29,0-.5Z"/>
                          <path class="cls-30" d="M985.21,51.91c.21.12.29.12.5,0-.12.21-.12.29,0,.5-.21-.12-.29-.12-.5,0,.12-.21.12-.29,0-.5Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M981.32,48.94c.27.1.35.08.57-.1-.1.27-.08.35.1.57-.27-.1-.35-.08-.57.1.1-.27.08-.35-.1-.57Z"/>
                          <path class="cls-50" d="M981.32,48.94c.27.1.35.08.57-.1-.1.27-.08.35.1.57-.27-.1-.35-.08-.57.1.1-.27.08-.35-.1-.57Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M977.77,55.24c-.05-.26-.11-.32-.36-.41.26-.05.32-.11.41-.36.05.26.11.32.36.41-.26.05-.32.11-.41.36Z"/>
                          <path class="cls-86" d="M977.77,55.24c-.05-.26-.11-.32-.36-.41.26-.05.32-.11.41-.36.05.26.11.32.36.41-.26.05-.32.11-.41.36Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M975.57,58.51c-.16.34-.16.46.06.78-.34-.16-.46-.16-.78.06.16-.34.16-.46-.06-.78.34.16.46.16.78-.06Z"/>
                          <path class="cls-97" d="M975.57,58.51c-.16.34-.16.46.06.78-.34-.16-.46-.16-.78.06.16-.34.16-.46-.06-.78.34.16.46.16.78-.06Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M973.48,29.48c-.36-.08-.46-.05-.72.22.08-.36.05-.46-.22-.72.36.08.46.05.72-.22-.08.36-.05.46.22.72Z"/>
                          <path class="cls-115" d="M973.48,29.48c-.36-.08-.46-.05-.72.22.08-.36.05-.46-.22-.72.36.08.46.05.72-.22-.08.36-.05.46.22.72Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M970.84,57.53c.35.04.45,0,.66-.28-.04.35,0,.45.28.66-.35-.04-.45,0-.66.28.04-.35,0-.45-.28-.66Z"/>
                          <path class="cls-21" d="M970.84,57.53c.35.04.45,0,.66-.28-.04.35,0,.45.28.66-.35-.04-.45,0-.66.28.04-.35,0-.45-.28-.66Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M969.85,27.71c-.01-.16-.04-.21-.18-.28.16-.01.21-.04.28-.18.01.16.04.21.18.28-.16.01-.21.04-.28.18Z"/>
                          <path class="cls-73" d="M969.85,27.71c-.01-.16-.04-.21-.18-.28.16-.01.21-.04.28-.18.01.16.04.21.18.28-.16.01-.21.04-.28.18Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M964.78,52.11c0,.24.04.3.24.42-.24,0-.3.04-.42.24,0-.24-.04-.3-.24-.42.24,0,.3-.04.42-.24Z"/>
                          <path class="cls-129" d="M964.78,52.11c0,.24.04.3.24.42-.24,0-.3.04-.42.24,0-.24-.04-.3-.24-.42.24,0,.3-.04.42-.24Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M961.6,61.45c.04.32.09.4.38.53-.32.04-.4.09-.53.38-.04-.32-.09-.4-.38-.53.32-.04.4-.09.53-.38Z"/>
                          <path class="cls-10" d="M961.6,61.45c.04.32.09.4.38.53-.32.04-.4.09-.53.38-.04-.32-.09-.4-.38-.53.32-.04.4-.09.53-.38Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M954.39,32.39c.19.04.24.03.38-.11-.04.19-.03.24.11.38-.19-.04-.24-.03-.38.11.04-.19.03-.24-.11-.38Z"/>
                          <path class="cls-184" d="M954.39,32.39c.19.04.24.03.38-.11-.04.19-.03.24.11.38-.19-.04-.24-.03-.38.11.04-.19.03-.24-.11-.38Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M953.01,56.95c-.25.1-.3.17-.34.44-.1-.25-.17-.3-.44-.34.25-.1.3-.17.34-.44.1.25.17.3.44.34Z"/>
                          <path class="cls-46" d="M953.01,56.95c-.25.1-.3.17-.34.44-.1-.25-.17-.3-.44-.34.25-.1.3-.17.34-.44.1.25.17.3.44.34Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M946.63,24.17c.11-.36.09-.47-.17-.76.36.11.47.09.76-.17-.11.36-.09.47.17.76-.36-.11-.47-.09-.76.17Z"/>
                          <path class="cls-109" d="M946.63,24.17c.11-.36.09-.47-.17-.76.36.11.47.09.76-.17-.11.36-.09.47.17.76-.36-.11-.47-.09-.76.17Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M942.37,47.44c-.02-.18-.06-.22-.22-.29.18-.02.22-.06.29-.22.02.18.06.22.22.29-.18.02-.22.06-.29.22Z"/>
                          <path class="cls-106" d="M942.37,47.44c-.02-.18-.06-.22-.22-.29.18-.02.22-.06.29-.22.02.18.06.22.22.29-.18.02-.22.06-.29.22Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M940.8,71.59c.12.1.17.11.32.05-.1.12-.11.17-.05.32-.12-.1-.17-.11-.32-.05.1-.12.11-.17.05-.32Z"/>
                          <path class="cls-61" d="M940.8,71.59c.12.1.17.11.32.05-.1.12-.11.17-.05.32-.12-.1-.17-.11-.32-.05.1-.12.11-.17.05-.32Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M938.96,67.32c-.16-.04-.2-.03-.32.09.04-.16.03-.2-.09-.32.16.04.2.03.32-.09-.04.16-.03.2.09.32Z"/>
                          <path class="cls-206" d="M938.96,67.32c-.16-.04-.2-.03-.32.09.04-.16.03-.2-.09-.32.16.04.2.03.32-.09-.04.16-.03.2.09.32Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M932.39,37.03c.3.1.4.08.64-.13-.1.3-.08.4.13.64-.3-.1-.4-.08-.64.13.1-.3.08-.4-.13-.64Z"/>
                          <path class="cls-212" d="M932.39,37.03c.3.1.4.08.64-.13-.1.3-.08.4.13.64-.3-.1-.4-.08-.64.13.1-.3.08-.4-.13-.64Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M928.25,16.86c.04-.17.03-.23-.1-.35.17.04.23.03.35-.1-.04.17-.03.23.1.35-.17-.04-.23-.03-.35.1Z"/>
                          <path class="cls-154" d="M928.25,16.86c.04-.17.03-.23-.1-.35.17.04.23.03.35-.1-.04.17-.03.23.1.35-.17-.04-.23-.03-.35.1Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M921.09,40.46c.11-.18.12-.24.02-.43.18.11.24.12.43.02-.11.18-.12.24-.02.43-.18-.11-.24-.12-.43-.02Z"/>
                          <path class="cls-56" d="M921.09,40.46c.11-.18.12-.24.02-.43.18.11.24.12.43.02-.11.18-.12.24-.02.43-.18-.11-.24-.12-.43-.02Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M920.22,18.23c-.31-.12-.41-.1-.67.1.12-.31.1-.41-.1-.67.31.12.41.1.67-.1-.12.31-.1.41.1.67Z"/>
                          <path class="cls-120" d="M920.22,18.23c-.31-.12-.41-.1-.67.1.12-.31.1-.41-.1-.67.31.12.41.1.67-.1-.12.31-.1.41.1.67Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M917.74,66.58c.14.24.22.28.49.28-.24.14-.28.22-.28.49-.14-.24-.22-.28-.49-.28.24-.14.28-.22.28-.49Z"/>
                          <path class="cls-108" d="M917.74,66.58c.14.24.22.28.49.28-.24.14-.28.22-.28.49-.14-.24-.22-.28-.49-.28.24-.14.28-.22.28-.49Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M914.85,47.1c.14-.27.13-.37-.03-.62.27.14.37.13.62-.03-.14.27-.13.37.03.62-.27-.14-.37-.13-.62.03Z"/>
                          <path class="cls-144" d="M914.85,47.1c.14-.27.13-.37-.03-.62.27.14.37.13.62-.03-.14.27-.13.37.03.62-.27-.14-.37-.13-.62.03Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M911.78,40.57c-.22-.13-.29-.14-.52-.02.13-.22.14-.29.02-.52.22.13.29.14.52.02-.13.22-.14.29-.02.52Z"/>
                          <path class="cls-126" d="M911.78,40.57c-.22-.13-.29-.14-.52-.02.13-.22.14-.29.02-.52.22.13.29.14.52.02-.13.22-.14.29-.02.52Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M908.52,63.87c.03.31.08.38.36.52-.31.03-.38.08-.52.36-.03-.31-.08-.38-.36-.52.31-.03.38-.08.52-.36Z"/>
                          <path class="cls-202" d="M908.52,63.87c.03.31.08.38.36.52-.31.03-.38.08-.52.36-.03-.31-.08-.38-.36-.52.31-.03.38-.08.52-.36Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M904.98,24.17c.23.19.32.2.59.1-.19.23-.2.32-.1.59-.23-.19-.32-.2-.59-.1.19-.23.2-.32.1-.59Z"/>
                          <path class="cls-19" d="M904.98,24.17c.23.19.32.2.59.1-.19.23-.2.32-.1.59-.23-.19-.32-.2-.59-.1.19-.23.2-.32.1-.59Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M902.78,32.36c-.2.23-.21.32-.12.61-.23-.2-.32-.21-.61-.12.2-.23.21-.32.12-.61.23.2.32.21.61.12Z"/>
                          <path class="cls-191" d="M902.78,32.36c-.2.23-.21.32-.12.61-.23-.2-.32-.21-.61-.12.2-.23.21-.32.12-.61.23.2.32.21.61.12Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M898.44,57.03c.03-.28,0-.36-.23-.52.28.03.36,0,.52-.23-.03.28,0,.36.23.52-.28-.03-.36,0-.52.23Z"/>
                          <path class="cls-83" d="M898.44,57.03c.03-.28,0-.36-.23-.52.28.03.36,0,.52-.23-.03.28,0,.36.23.52-.28-.03-.36,0-.52.23Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M894.72,35.99c.15.11.2.12.37.05-.11.15-.12.2-.05.37-.15-.11-.2-.12-.37-.05.11-.15.12-.2.05-.37Z"/>
                          <path class="cls-225" d="M894.72,35.99c.15.11.2.12.37.05-.11.15-.12.2-.05.37-.15-.11-.2-.12-.37-.05.11-.15.12-.2.05-.37Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M893.14,35.24c-.21.11-.25.17-.27.4-.11-.21-.17-.25-.4-.27.21-.11.25-.17.27-.4.11.21.17.25.4.27Z"/>
                          <path class="cls-153" d="M893.14,35.24c-.21.11-.25.17-.27.4-.11-.21-.17-.25-.4-.27.21-.11.25-.17.27-.4.11.21.17.25.4.27Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M888.26,40.34c-.05.17-.04.23.08.36-.17-.05-.23-.04-.36.08.05-.17.04-.23-.08-.36.17.05.23.04.36-.08Z"/>
                          <path class="cls-42" d="M888.26,40.34c-.05.17-.04.23.08.36-.17-.05-.23-.04-.36.08.05-.17.04-.23-.08-.36.17.05.23.04.36-.08Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M885.36,56.97c.18-.28.19-.38.04-.68.28.18.38.19.68.04-.18.28-.19.38-.04.68-.28-.18-.38-.19-.68-.04Z"/>
                          <path class="cls-94" d="M885.36,56.97c.18-.28.19-.38.04-.68.28.18.38.19.68.04-.18.28-.19.38-.04.68-.28-.18-.38-.19-.68-.04Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M883.69,20.54c.05.2.1.25.3.31-.2.05-.25.1-.31.3-.05-.2-.1-.25-.3-.31.2-.05.25-.1.31-.3Z"/>
                          <path class="cls-171" d="M883.69,20.54c.05.2.1.25.3.31-.2.05-.25.1-.31.3-.05-.2-.1-.25-.3-.31.2-.05.25-.1.31-.3Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M879.79,16.32c.15.15.21.17.42.11-.15.15-.17.21-.11.42-.15-.15-.21-.17-.42-.11.15-.15.17-.21.11-.42Z"/>
                          <path class="cls-124" d="M879.79,16.32c.15.15.21.17.42.11-.15.15-.17.21-.11.42-.15-.15-.21-.17-.42-.11.15-.15.17-.21.11-.42Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M875,15.15c-.25-.12-.33-.11-.55.04.12-.25.11-.33-.04-.55.25.12.33.11.55-.04-.12.25-.11.33.04.55Z"/>
                          <path class="cls-96" d="M875,15.15c-.25-.12-.33-.11-.55.04.12-.25.11-.33-.04-.55.25.12.33.11.55-.04-.12.25-.11.33.04.55Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M870.62,15.56c.25-.16.29-.23.29-.53.16.25.23.29.53.29-.25.16-.29.23-.29.53-.16-.25-.23-.29-.53-.29Z"/>
                          <path class="cls-196" d="M870.62,15.56c.25-.16.29-.23.29-.53.16.25.23.29.53.29-.25.16-.29.23-.29.53-.16-.25-.23-.29-.53-.29Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M869.2,14.82c.07.26.13.31.39.38-.26.07-.31.13-.38.39-.07-.26-.13-.31-.39-.38.26-.07.31-.13.38-.39Z"/>
                          <path class="cls-139" d="M869.2,14.82c.07.26.13.31.39.38-.26.07-.31.13-.38.39-.07-.26-.13-.31-.39-.38.26-.07.31-.13.38-.39Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M866.55,19.84c.13.32.21.39.55.45-.32.13-.39.21-.45.55-.13-.32-.21-.39-.55-.45.32-.13.39-.21.45-.55Z"/>
                          <path class="cls-119" d="M866.55,19.84c.13.32.21.39.55.45-.32.13-.39.21-.45.55-.13-.32-.21-.39-.55-.45.32-.13.39-.21.45-.55Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M860.91,50.15c.1.25.16.3.42.34-.25.1-.3.16-.34.42-.1-.25-.16-.3-.42-.34.25-.1.3-.16.34-.42Z"/>
                          <path class="cls-174" d="M860.91,50.15c.1.25.16.3.42.34-.25.1-.3.16-.34.42-.1-.25-.16-.3-.42-.34.25-.1.3-.16.34-.42Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M859.16,16.88c-.2-.13-.27-.13-.48-.03.13-.2.13-.27.03-.48.2.13.27.13.48.03-.13.2-.13.27-.03.48Z"/>
                          <path class="cls-104" d="M859.16,16.88c-.2-.13-.27-.13-.48-.03.13-.2.13-.27.03-.48.2.13.27.13.48.03-.13.2-.13.27-.03.48Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M853.69,52.41c.27.2.38.21.69.08-.2.27-.21.38-.08.69-.27-.2-.38-.21-.69-.08.2-.27.21-.38.08-.69Z"/>
                          <path class="cls-238" d="M853.69,52.41c.27.2.38.21.69.08-.2.27-.21.38-.08.69-.27-.2-.38-.21-.69-.08.2-.27.21-.38.08-.69Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M851.11,71.07c.07.14.11.17.26.18-.14.07-.17.11-.18.26-.07-.14-.11-.17-.26-.18.14-.07.17-.11.18-.26Z"/>
                          <path class="cls-28" d="M851.11,71.07c.07.14.11.17.26.18-.14.07-.17.11-.18.26-.07-.14-.11-.17-.26-.18.14-.07.17-.11.18-.26Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M846.26,58.34c-.15.22-.16.3-.05.55-.22-.15-.3-.16-.55-.05.15-.22.16-.3.05-.55.22.15.3.16.55.05Z"/>
                          <path class="cls-95" d="M846.26,58.34c-.15.22-.16.3-.05.55-.22-.15-.3-.16-.55-.05.15-.22.16-.3.05-.55.22.15.3.16.55.05Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M840.34,38.95c.3.03.38,0,.56-.24-.03.3,0,.38.24.56-.3-.03-.38,0-.56.24.03-.3,0-.38-.24-.56Z"/>
                          <path class="cls-111" d="M840.34,38.95c.3.03.38,0,.56-.24-.03.3,0,.38.24.56-.3-.03-.38,0-.56.24.03-.3,0-.38-.24-.56Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M836.34,48.62c-.16.18-.17.25-.1.48-.18-.16-.25-.17-.48-.1.16-.18.17-.25.1-.48.18.16.25.17.48.1Z"/>
                          <path class="cls-224" d="M836.34,48.62c-.16.18-.17.25-.1.48-.18-.16-.25-.17-.48-.1.16-.18.17-.25.1-.48.18.16.25.17.48.1Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M834.01,21.14c-.23.25-.26.36-.16.68-.25-.23-.36-.26-.68-.16.23-.25.26-.36.16-.68.25.23.36.26.68.16Z"/>
                          <path class="cls-43" d="M834.01,21.14c-.23.25-.26.36-.16.68-.25-.23-.36-.26-.68-.16.23-.25.26-.36.16-.68.25.23.36.26.68.16Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M830.69,42.42c-.03.27,0,.34.22.51-.27-.03-.34,0-.51.22.03-.27,0-.34-.22-.51.27.03.34,0,.51-.22Z"/>
                          <path class="cls-165" d="M830.69,42.42c-.03.27,0,.34.22.51-.27-.03-.34,0-.51.22.03-.27,0-.34-.22-.51.27.03.34,0,.51-.22Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M823.72,60.98c-.14.15-.15.21-.09.41-.15-.14-.21-.15-.41-.09.14-.15.15-.21.09-.41.15.14.21.15.41.09Z"/>
                          <path class="cls-89" d="M823.72,60.98c-.14.15-.15.21-.09.41-.15-.14-.21-.15-.41-.09.14-.15.15-.21.09-.41.15.14.21.15.41.09Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M820.13,58.88c-.14-.27-.21-.31-.51-.33.27-.14.31-.21.33-.51.14.27.21.31.51.33-.27.14-.31.21-.33.51Z"/>
                          <path class="cls-35" d="M820.13,58.88c-.14-.27-.21-.31-.51-.33.27-.14.31-.21.33-.51.14.27.21.31.51.33-.27.14-.31.21-.33.51Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M818.97,24.48c-.19.25-.2.35-.08.64-.25-.19-.35-.2-.64-.08.19-.25.2-.35.08-.64.25.19.35.2.64.08Z"/>
                          <path class="cls-31" d="M818.97,24.48c-.19.25-.2.35-.08.64-.25-.19-.35-.2-.64-.08.19-.25.2-.35.08-.64.25.19.35.2.64.08Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M815.32,51.45c.35-.01.44-.07.6-.38.01.35.07.44.38.6-.35.01-.44.07-.6.38-.01-.35-.07-.44-.38-.6Z"/>
                          <path class="cls-24" d="M815.32,51.45c.35-.01.44-.07.6-.38.01.35.07.44.38.6-.35.01-.44.07-.6.38-.01-.35-.07-.44-.38-.6Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M811.78,31.69c-.21-.04-.27-.01-.41.15.04-.21.01-.27-.15-.41.21.04.27.01.41-.15-.04.21-.01.27.15.41Z"/>
                          <path class="cls-223" d="M811.78,31.69c-.21-.04-.27-.01-.41.15.04-.21.01-.27-.15-.41.21.04.27.01.41-.15-.04.21-.01.27.15.41Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M805.13,51.51c.15.16.22.18.43.13-.16.15-.18.22-.13.43-.15-.16-.22-.18-.43-.13.16-.15.18-.22.13-.43Z"/>
                          <path class="cls-133" d="M805.13,51.51c.15.16.22.18.43.13-.16.15-.18.22-.13.43-.15-.16-.22-.18-.43-.13.16-.15.18-.22.13-.43Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M798.4,17.57c.14-.33.12-.43-.09-.72.33.14.43.12.72-.09-.14.33-.12.43.09.72-.33-.14-.43-.12-.72.09Z"/>
                          <path class="cls-13" d="M798.4,17.57c.14-.33.12-.43-.09-.72.33.14.43.12.72-.09-.14.33-.12.43.09.72-.33-.14-.43-.12-.72.09Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M792.13,41.14c-.08-.18-.13-.21-.32-.24.18-.08.21-.13.24-.32.08.18.13.21.32.24-.18.08-.21.13-.24.32Z"/>
                          <path class="cls-243" d="M792.13,41.14c-.08-.18-.13-.21-.32-.24.18-.08.21-.13.24-.32.08.18.13.21.32.24-.18.08-.21.13-.24.32Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M789.25,51.76c-.03-.38-.1-.47-.44-.64.38-.03.47-.1.64-.44.03.38.1.47.44.64-.38.03-.47.1-.64.44Z"/>
                          <path class="cls-1" d="M789.25,51.76c-.03-.38-.1-.47-.44-.64.38-.03.47-.1.64-.44.03.38.1.47.44.64-.38.03-.47.1-.64.44Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M784.63,20.88c.19-.24.2-.33.1-.61.24.19.33.2.61.1-.19.24-.2.33-.1.61-.24-.19-.33-.2-.61-.1Z"/>
                          <path class="cls-177" d="M784.63,20.88c.19-.24.2-.33.1-.61.24.19.33.2.61.1-.19.24-.2.33-.1.61-.24-.19-.33-.2-.61-.1Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M781.32,41.4c-.19-.27-.29-.32-.62-.29.27-.19.32-.29.29-.62.19.27.29.32.62.29-.27.19-.32.29-.29.62Z"/>
                          <path class="cls-6" d="M781.32,41.4c-.19-.27-.29-.32-.62-.29.27-.19.32-.29.29-.62.19.27.29.32.62.29-.27.19-.32.29-.29.62Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M774.87,40.75c.03-.31,0-.39-.25-.58.31.03.39,0,.58-.25-.03.31,0,.39.25.58-.31-.03-.39,0-.58.25Z"/>
                          <path class="cls-91" d="M774.87,40.75c.03-.31,0-.39-.25-.58.31.03.39,0,.58-.25-.03.31,0,.39.25.58-.31-.03-.39,0-.58.25Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M769.8,71.59c.15-.08.17-.13.18-.3.08.15.13.17.3.18-.15.08-.17.13-.18.3-.08-.15-.13-.17-.3-.18Z"/>
                          <path class="cls-185" d="M769.8,71.59c.15-.08.17-.13.18-.3.08.15.13.17.3.18-.15.08-.17.13-.18.3-.08-.15-.13-.17-.3-.18Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M763.25,42.05c.13.31.21.38.54.43-.31.13-.38.21-.43.54-.13-.31-.21-.38-.54-.43.31-.13.38-.21.43-.54Z"/>
                          <path class="cls-131" d="M763.25,42.05c.13.31.21.38.54.43-.31.13-.38.21-.43.54-.13-.31-.21-.38-.54-.43.31-.13.38-.21.43-.54Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M760.72,30.05c.16-.12.18-.18.16-.38.12.16.18.18.38.16-.16.12-.18.18-.16.38-.12-.16-.18-.18-.38-.16Z"/>
                          <path class="cls-117" d="M760.72,30.05c.16-.12.18-.18.16-.38.12.16.18.18.38.16-.16.12-.18.18-.16.38-.12-.16-.18-.18-.38-.16Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M754.7,39.95c.09.19.15.22.36.24-.19.09-.22.15-.24.36-.09-.19-.15-.22-.36-.24.19-.09.22-.15.24-.36Z"/>
                          <path class="cls-147" d="M754.7,39.95c.09.19.15.22.36.24-.19.09-.22.15-.24.36-.09-.19-.15-.22-.36-.24.19-.09.22-.15.24-.36Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M752.47,24.3c-.11.3-.1.4.1.65-.3-.11-.4-.1-.65.1.11-.3.1-.4-.1-.65.3.11.4.1.65-.1Z"/>
                          <path class="cls-38" d="M752.47,24.3c-.11.3-.1.4.1.65-.3-.11-.4-.1-.65.1.11-.3.1-.4-.1-.65.3.11.4.1.65-.1Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M749.74,69.05c-.36,0-.46.06-.63.38,0-.36-.06-.46-.38-.63.36,0,.46-.06.63-.38,0,.36.06.46.38.63Z"/>
                          <path class="cls-93" d="M749.74,69.05c-.36,0-.46.06-.63.38,0-.36-.06-.46-.38-.63.36,0,.46-.06.63-.38,0,.36.06.46.38.63Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M745.89,29.89c.27-.09.33-.15.4-.43.09.27.15.33.43.4-.27.09-.33.15-.4.43-.09-.27-.15-.33-.43-.4Z"/>
                          <path class="cls-175" d="M745.89,29.89c.27-.09.33-.15.4-.43.09.27.15.33.43.4-.27.09-.33.15-.4.43-.09-.27-.15-.33-.43-.4Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M738.98,71.42c.25.04.33.01.49-.18-.04.25-.01.33.18.49-.25-.04-.33-.01-.49.18.04-.25.01-.33-.18-.49Z"/>
                          <path class="cls-211" d="M738.98,71.42c.25.04.33.01.49-.18-.04.25-.01.33.18.49-.25-.04-.33-.01-.49.18.04-.25.01-.33-.18-.49Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M731.56,61.72c.31.08.41.06.64-.17-.08.31-.06.41.17.64-.31-.08-.41-.06-.64.17.08-.31.06-.41-.17-.64Z"/>
                          <path class="cls-112" d="M731.56,61.72c.31.08.41.06.64-.17-.08.31-.06.41.17.64-.31-.08-.41-.06-.64.17.08-.31.06-.41-.17-.64Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M729.86,70.08c.24.02.31,0,.45-.2-.02.24,0,.31.2.45-.24-.02-.31,0-.45.2.02-.24,0-.31-.2-.45Z"/>
                          <path class="cls-8" d="M729.86,70.08c.24.02.31,0,.45-.2-.02.24,0,.31.2.45-.24-.02-.31,0-.45.2.02-.24,0-.31-.2-.45Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M727.98,56.43c.08-.21.07-.27-.06-.45.21.08.27.07.45-.06-.08.21-.07.27.06.45-.21-.08-.27-.07-.45.06Z"/>
                          <path class="cls-218" d="M727.98,56.43c.08-.21.07-.27-.06-.45.21.08.27.07.45-.06-.08.21-.07.27.06.45-.21-.08-.27-.07-.45.06Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M723.73,21.05c.25.16.34.17.6.04-.16.25-.17.34-.04.6-.25-.16-.34-.17-.6-.04.16-.25.17-.34.04-.6Z"/>
                          <path class="cls-219" d="M723.73,21.05c.25.16.34.17.6.04-.16.25-.17.34-.04.6-.25-.16-.34-.17-.6-.04.16-.25.17-.34.04-.6Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M720.59,17.12c-.16.03-.2.06-.25.22-.03-.16-.06-.2-.22-.25.16-.03.2-.06.25-.22.03.16.06.2.22.25Z"/>
                          <path class="cls-166" d="M720.59,17.12c-.16.03-.2.06-.25.22-.03-.16-.06-.2-.22-.25.16-.03.2-.06.25-.22.03.16.06.2.22.25Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M715.67,34.73c-.31.16-.37.25-.4.6-.16-.31-.25-.37-.6-.4.31-.16.37-.25.4-.6.16.31.25.37.6.4Z"/>
                          <path class="cls-22" d="M715.67,34.73c-.31.16-.37.25-.4.6-.16-.31-.25-.37-.6-.4.31-.16.37-.25.4-.6.16.31.25.37.6.4Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M709.5,69.56c-.16.3-.16.4.01.69-.3-.16-.4-.16-.69.01.16-.3.16-.4-.01-.69.3.16.4.16.69-.01Z"/>
                          <path class="cls-265" d="M709.5,69.56c-.16.3-.16.4.01.69-.3-.16-.4-.16-.69.01.16-.3.16-.4-.01-.69.3.16.4.16.69-.01Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M704.42,32.24c0-.19-.03-.23-.19-.33.19,0,.23-.03.33-.19,0,.19.03.23.19.33-.19,0-.23.03-.33.19Z"/>
                          <path class="cls-190" d="M704.42,32.24c0-.19-.03-.23-.19-.33.19,0,.23-.03.33-.19,0,.19.03.23.19.33-.19,0-.23.03-.33.19Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M697.02,15.51c.35.08.45.05.7-.2-.08.35-.05.45.2.7-.35-.08-.45-.05-.7.2.08-.35.05-.45-.2-.7Z"/>
                          <path class="cls-79" d="M697.02,15.51c.35.08.45.05.7-.2-.08.35-.05.45.2.7-.35-.08-.45-.05-.7.2.08-.35.05-.45-.2-.7Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M692.68,30.37c-.14.18-.14.25-.06.46-.18-.14-.25-.14-.46-.06.14-.18.14-.25.06-.46.18.14.25.14.46.06Z"/>
                          <path class="cls-203" d="M692.68,30.37c-.14.18-.14.25-.06.46-.18-.14-.25-.14-.46-.06.14-.18.14-.25.06-.46.18.14.25.14.46.06Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M689.9,26.26c.31-.08.38-.14.48-.45.08.31.14.38.45.48-.31.08-.38.14-.48.45-.08-.31-.14-.38-.45-.48Z"/>
                          <path class="cls-143" d="M689.9,26.26c.31-.08.38-.14.48-.45.08.31.14.38.45.48-.31.08-.38.14-.48.45-.08-.31-.14-.38-.45-.48Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M683.62,53.87c-.3.03-.38.08-.5.35-.03-.3-.08-.38-.35-.5.3-.03.38-.08.5-.35.03.3.08.38.35.5Z"/>
                          <path class="cls-101" d="M683.62,53.87c-.3.03-.38.08-.5.35-.03-.3-.08-.38-.35-.5.3-.03.38-.08.5-.35.03.3.08.38.35.5Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M677.9,43.65c-.18.22-.2.3-.1.56-.22-.18-.3-.2-.56-.1.18-.22.2-.3.1-.56.22.18.3.2.56.1Z"/>
                          <path class="cls-187" d="M677.9,43.65c-.18.22-.2.3-.1.56-.22-.18-.3-.2-.56-.1.18-.22.2-.3.1-.56.22.18.3.2.56.1Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M672.16,46.25c-.14-.3-.22-.35-.54-.39.3-.14.35-.22.39-.54.14.3.22.35.54.39-.3.14-.35.22-.39.54Z"/>
                          <path class="cls-121" d="M672.16,46.25c-.14-.3-.22-.35-.54-.39.3-.14.35-.22.39-.54.14.3.22.35.54.39-.3.14-.35.22-.39.54Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M669.71,41.03c-.28.11-.33.18-.38.47-.11-.28-.18-.33-.47-.38.28-.11.33-.18.38-.47.11.28.18.33.47.38Z"/>
                          <path class="cls-49" d="M669.71,41.03c-.28.11-.33.18-.38.47-.11-.28-.18-.33-.47-.38.28-.11.33-.18.38-.47.11.28.18.33.47.38Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M663.59,63.91c-.15.04-.19.08-.23.24-.04-.15-.08-.19-.24-.23.15-.04.19-.08.23-.24.04.15.08.19.24.23Z"/>
                          <path class="cls-239" d="M663.59,63.91c-.15.04-.19.08-.23.24-.04-.15-.08-.19-.24-.23.15-.04.19-.08.23-.24.04.15.08.19.24.23Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M660.2,68.89c.07-.15.07-.2-.02-.34.15.07.2.07.34-.02-.07.15-.07.2.02.34-.15-.07-.2-.07-.34.02Z"/>
                          <path class="cls-172" d="M660.2,68.89c.07-.15.07-.2-.02-.34.15.07.2.07.34-.02-.07.15-.07.2.02.34-.15-.07-.2-.07-.34.02Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M654.97,45.18c.24.11.33.1.54-.05-.11.24-.1.33.05.54-.24-.11-.33-.1-.54.05.11-.24.1-.33-.05-.54Z"/>
                          <path class="cls-37" d="M654.97,45.18c.24.11.33.1.54-.05-.11.24-.1.33.05.54-.24-.11-.33-.1-.54.05.11-.24.1-.33-.05-.54Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M649.29,44.2c.06.28.12.35.4.44-.28.06-.35.12-.44.4-.06-.28-.12-.35-.4-.44.28-.06.35-.12.44-.4Z"/>
                          <path class="cls-123" d="M649.29,44.2c.06.28.12.35.4.44-.28.06-.35.12-.44.4-.06-.28-.12-.35-.4-.44.28-.06.35-.12.44-.4Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M642.28,72.58c-.26.01-.33.06-.45.29-.01-.26-.06-.33-.29-.45.26-.01.33-.06.45-.29.01.26.06.33.29.45Z"/>
                          <path class="cls-200" d="M642.28,72.58c-.26.01-.33.06-.45.29-.01-.26-.06-.33-.29-.45.26-.01.33-.06.45-.29.01.26.06.33.29.45Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M637.34,59.92c-.14-.15-.2-.17-.4-.13.15-.14.17-.2.13-.4.14.15.2.17.4.13-.15.14-.17.2-.13.4Z"/>
                          <path class="cls-116" d="M637.34,59.92c-.14-.15-.2-.17-.4-.13.15-.14.17-.2.13-.4.14.15.2.17.4.13-.15.14-.17.2-.13.4Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M634.66,44.31c.15.11.21.12.39.04-.11.15-.12.21-.04.39-.15-.11-.21-.12-.39-.04.11-.15.12-.21.04-.39Z"/>
                          <path class="cls-222" d="M634.66,44.31c.15.11.21.12.39.04-.11.15-.12.21-.04.39-.15-.11-.21-.12-.39-.04.11-.15.12-.21.04-.39Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M630.58,47.31c-.24,0-.3.04-.42.24,0-.24-.04-.3-.24-.42.24,0,.3-.04.42-.24,0,.24.04.3.24.42Z"/>
                          <path class="cls-164" d="M630.58,47.31c-.24,0-.3.04-.42.24,0-.24-.04-.3-.24-.42.24,0,.3-.04.42-.24,0,.24.04.3.24.42Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M623.66,66.82c-.16-.18-.23-.21-.47-.17.18-.16.21-.23.17-.47.16.18.23.21.47.17-.18.16-.21.23-.17.47Z"/>
                          <path class="cls-253" d="M623.66,66.82c-.16-.18-.23-.21-.47-.17.18-.16.21-.23.17-.47.16.18.23.21.47.17-.18.16-.21.23-.17.47Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M616.79,64.73c.1.27.17.32.44.38-.27.1-.32.17-.38.44-.1-.27-.17-.32-.44-.38.27-.1.32-.17.38-.44Z"/>
                          <path class="cls-247" d="M616.79,64.73c.1.27.17.32.44.38-.27.1-.32.17-.38.44-.1-.27-.17-.32-.44-.38.27-.1.32-.17.38-.44Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M610.28,51.83c.16-.21.17-.29.07-.53.21.16.29.17.53.07-.16.21-.17.29-.07.53-.21-.16-.29-.17-.53-.07Z"/>
                          <path class="cls-32" d="M610.28,51.83c.16-.21.17-.29.07-.53.21.16.29.17.53.07-.16.21-.17.29-.07.53-.21-.16-.29-.17-.53-.07Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M602.85,53.25c.19-.24.2-.33.09-.62.24.19.33.2.62.09-.19.24-.2.33-.09.62-.24-.19-.33-.2-.62-.09Z"/>
                          <path class="cls-114" d="M602.85,53.25c.19-.24.2-.33.09-.62.24.19.33.2.62.09-.19.24-.2.33-.09.62-.24-.19-.33-.2-.62-.09Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M598.76,30.02c.06-.33.03-.43-.22-.65.33.06.43.03.65-.22-.06.33-.03.43.22.65-.33-.06-.43-.03-.65.22Z"/>
                          <path class="cls-150" d="M598.76,30.02c.06-.33.03-.43-.22-.65.33.06.43.03.65-.22-.06.33-.03.43.22.65-.33-.06-.43-.03-.65.22Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M592.7,23.27c.22.29.32.34.69.3-.29.22-.34.32-.3.69-.22-.29-.32-.34-.69-.3.29-.22.34-.32.3-.69Z"/>
                          <path class="cls-232" d="M592.7,23.27c.22.29.32.34.69.3-.29.22-.34.32-.3.69-.22-.29-.32-.34-.69-.3.29-.22.34-.32.3-.69Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M587.4,52.24c.07-.33.04-.43-.21-.66.33.07.43.04.66-.21-.07.33-.04.43.21.66-.33-.07-.43-.04-.66.21Z"/>
                          <path class="cls-2" d="M587.4,52.24c.07-.33.04-.43-.21-.66.33.07.43.04.66-.21-.07.33-.04.43.21.66-.33-.07-.43-.04-.66.21Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M583.45,38.37c-.25-.1-.33-.09-.54.07.1-.25.09-.33-.07-.54.25.1.33.09.54-.07-.1.25-.09.33.07.54Z"/>
                          <path class="cls-137" d="M583.45,38.37c-.25-.1-.33-.09-.54.07.1-.25.09-.33-.07-.54.25.1.33.09.54-.07-.1.25-.09.33.07.54Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M577.98,60.15c.24.18.33.2.61.09-.18.24-.2.33-.09.61-.24-.18-.33-.2-.61-.09.18-.24.2-.33.09-.61Z"/>
                          <path class="cls-78" d="M577.98,60.15c.24.18.33.2.61.09-.18.24-.2.33-.09.61-.24-.18-.33-.2-.61-.09.18-.24.2-.33.09-.61Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M572.76,43.59c.17-.29.18-.39.02-.68.29.17.39.18.68.02-.17.29-.18.39-.02.68-.29-.17-.39-.18-.68-.02Z"/>
                          <path class="cls-242" d="M572.76,43.59c.17-.29.18-.39.02-.68.29.17.39.18.68.02-.17.29-.18.39-.02.68-.29-.17-.39-.18-.68-.02Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M569.18,39.32c.25.11.34.1.56-.06-.11.25-.1.34.06.56-.25-.11-.34-.1-.56.06.11-.25.1-.34-.06-.56Z"/>
                          <path class="cls-160" d="M569.18,39.32c.25.11.34.1.56-.06-.11.25-.1.34.06.56-.25-.11-.34-.1-.56.06.11-.25.1-.34-.06-.56Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M564.4,47.53c.24.19.33.2.61.09-.19.24-.2.33-.09.61-.24-.19-.33-.2-.61-.09.19-.24.2-.33.09-.61Z"/>
                          <path class="cls-152" d="M564.4,47.53c.24.19.33.2.61.09-.19.24-.2.33-.09.61-.24-.19-.33-.2-.61-.09.19-.24.2-.33.09-.61Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M561.62,70.5c.22.05.28.02.43-.14-.05.22-.02.28.14.43-.22-.05-.28-.02-.43.14.05-.22.02-.28-.14-.43Z"/>
                          <path class="cls-66" d="M561.62,70.5c.22.05.28.02.43-.14-.05.22-.02.28.14.43-.22-.05-.28-.02-.43.14.05-.22.02-.28-.14-.43Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M558.81,57.45c-.07-.27-.12-.33-.39-.41.27-.07.33-.12.41-.39.07.27.12.33.39.41-.27.07-.33.12-.41.39Z"/>
                          <path class="cls-88" d="M558.81,57.45c-.07-.27-.12-.33-.39-.41.27-.07.33-.12.41-.39.07.27.12.33.39.41-.27.07-.33.12-.41.39Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M554.39,44.33c.08-.23.06-.3-.1-.49.23.08.3.06.49-.1-.08.23-.06.3.1.49-.23-.08-.3-.06-.49.1Z"/>
                          <path class="cls-90" d="M554.39,44.33c.08-.23.06-.3-.1-.49.23.08.3.06.49-.1-.08.23-.06.3.1.49-.23-.08-.3-.06-.49.1Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M548.43,63.56c.21-.11.25-.17.27-.42.11.21.17.25.42.27-.21.11-.25.17-.27.42-.11-.21-.17-.25-.42-.27Z"/>
                          <path class="cls-267" d="M548.43,63.56c.21-.11.25-.17.27-.42.11.21.17.25.42.27-.21.11-.25.17-.27.42-.11-.21-.17-.25-.42-.27Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M543.5,17.26c.23-.18.26-.27.22-.56.18.23.27.26.56.22-.23.18-.26.27-.22.56-.18-.23-.27-.26-.56-.22Z"/>
                          <path class="cls-216" d="M543.5,17.26c.23-.18.26-.27.22-.56.18.23.27.26.56.22-.23.18-.26.27-.22.56-.18-.23-.27-.26-.56-.22Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M537.76,59.99c-.34-.09-.44-.07-.69.17.09-.34.07-.44-.17-.69.34.09.44.07.69-.17-.09.34-.07.44.17.69Z"/>
                          <path class="cls-180" d="M537.76,59.99c-.34-.09-.44-.07-.69.17.09-.34.07-.44-.17-.69.34.09.44.07.69-.17-.09.34-.07.44.17.69Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M534.14,68.88c-.12-.2-.18-.23-.42-.23.2-.12.23-.18.23-.42.12.2.18.23.42.23-.2.12-.23.18-.23.42Z"/>
                          <path class="cls-12" d="M534.14,68.88c-.12-.2-.18-.23-.42-.23.2-.12.23-.18.23-.42.12.2.18.23.42.23-.2.12-.23.18-.23.42Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M531.53,34.12c-.32.16-.38.25-.4.61-.16-.32-.25-.38-.61-.4.32-.16.38-.25.4-.61.16.32.25.38.61.4Z"/>
                          <path class="cls-122" d="M531.53,34.12c-.32.16-.38.25-.4.61-.16-.32-.25-.38-.61-.4.32-.16.38-.25.4-.61.16.32.25.38.61.4Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M526.8,67.2c.25-.23.28-.32.22-.66.23.25.32.28.66.22-.25.23-.28.32-.22.66-.23-.25-.32-.28-.66-.22Z"/>
                          <path class="cls-188" d="M526.8,67.2c.25-.23.28-.32.22-.66.23.25.32.28.66.22-.25.23-.28.32-.22.66-.23-.25-.32-.28-.66-.22Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M520.33,35.4c.16-.03.2-.07.25-.22.03.16.07.2.22.25-.16.03-.2.07-.25.22-.03-.16-.07-.2-.22-.25Z"/>
                          <path class="cls-107" d="M520.33,35.4c.16-.03.2-.07.25-.22.03.16.07.2.22.25-.16.03-.2.07-.25.22-.03-.16-.07-.2-.22-.25Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M514.55,72.19c.23-.05.28-.1.36-.32.05.23.1.28.32.36-.23.05-.28.1-.36.32-.05-.23-.1-.28-.32-.36Z"/>
                          <path class="cls-60" d="M514.55,72.19c.23-.05.28-.1.36-.32.05.23.1.28.32.36-.23.05-.28.1-.36.32-.05-.23-.1-.28-.32-.36Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M509.08,64.13c.16-.34.15-.45-.05-.76.34.16.45.15.76-.05-.16.34-.15.45.05.76-.34-.16-.45-.15-.76.05Z"/>
                          <path class="cls-162" d="M509.08,64.13c.16-.34.15-.45-.05-.76.34.16.45.15.76-.05-.16.34-.15.45.05.76-.34-.16-.45-.15-.76.05Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M504.56,17.18c.14-.2.15-.28.05-.51.2.14.28.15.51.05-.14.2-.15.28-.05.51-.2-.14-.28-.15-.51-.05Z"/>
                          <path class="cls-3" d="M504.56,17.18c.14-.2.15-.28.05-.51.2.14.28.15.51.05-.14.2-.15.28-.05.51-.2-.14-.28-.15-.51-.05Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M499.87,57.34c-.28,0-.35.04-.5.29,0-.28-.04-.35-.29-.5.28,0,.35-.04.5-.29,0,.28.04.35.29.5Z"/>
                          <path class="cls-250" d="M499.87,57.34c-.28,0-.35.04-.5.29,0-.28-.04-.35-.29-.5.28,0,.35-.04.5-.29,0,.28.04.35.29.5Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M497.75,59.68c-.15.24-.15.33-.02.58-.24-.15-.33-.15-.58-.02.15-.24.15-.33.02-.58.24.15.33.15.58.02Z"/>
                          <path class="cls-173" d="M497.75,59.68c-.15.24-.15.33-.02.58-.24-.15-.33-.15-.58-.02.15-.24.15-.33.02-.58.24.15.33.15.58.02Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M490.73,27.8c-.3-.19-.41-.19-.73-.03.19-.3.19-.41.03-.73.3.19.41.19.73.03-.19.3-.19.41-.03.73Z"/>
                          <path class="cls-149" d="M490.73,27.8c-.3-.19-.41-.19-.73-.03.19-.3.19-.41.03-.73.3.19.41.19.73.03-.19.3-.19.41-.03.73Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M485.14,59.64c.09-.28.07-.37-.12-.59.28.09.37.07.59-.12-.09.28-.07.37.12.59-.28-.09-.37-.07-.59.12Z"/>
                          <path class="cls-47" d="M485.14,59.64c.09-.28.07-.37-.12-.59.28.09.37.07.59-.12-.09.28-.07.37.12.59-.28-.09-.37-.07-.59.12Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M479.37,71.42c-.21-.07-.27-.05-.44.09.07-.21.05-.27-.09-.44.21.07.27.05.44-.09-.07.21-.05.27.09.44Z"/>
                          <path class="cls-134" d="M479.37,71.42c-.21-.07-.27-.05-.44.09.07-.21.05-.27-.09-.44.21.07.27.05.44-.09-.07.21-.05.27.09.44Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M471.46,69.21c.27.06.35.03.53-.17-.06.27-.03.35.17.53-.27-.06-.35-.03-.53.17.06-.27.03-.35-.17-.53Z"/>
                          <path class="cls-179" d="M471.46,69.21c.27.06.35.03.53-.17-.06.27-.03.35.17.53-.27-.06-.35-.03-.53.17.06-.27.03-.35-.17-.53Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M468.07,40.19c.13.33.21.39.56.45-.33.13-.39.21-.45.56-.13-.33-.21-.39-.56-.45.33-.13.39-.21.45-.56Z"/>
                          <path class="cls-71" d="M468.07,40.19c.13.33.21.39.56.45-.33.13-.39.21-.45.56-.13-.33-.21-.39-.56-.45.33-.13.39-.21.45-.56Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M466.61,48.68c.07.36.14.45.49.58-.36.07-.45.14-.58.49-.07-.36-.14-.45-.49-.58.36-.07.45-.14.58-.49Z"/>
                          <path class="cls-176" d="M466.61,48.68c.07.36.14.45.49.58-.36.07-.45.14-.58.49-.07-.36-.14-.45-.49-.58.36-.07.45-.14.58-.49Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M459.82,15.35c-.25-.1-.33-.09-.55.07.1-.25.09-.33-.07-.55.25.1.33.09.55-.07-.1.25-.09.33.07.55Z"/>
                          <path class="cls-142" d="M459.82,15.35c-.25-.1-.33-.09-.55.07.1-.25.09-.33-.07-.55.25.1.33.09.55-.07-.1.25-.09.33.07.55Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M456.43,32.82c-.24-.24-.34-.27-.67-.19.24-.24.27-.34.19-.67.24.24.34.27.67.19-.24.24-.27.34-.19.67Z"/>
                          <path class="cls-15" d="M456.43,32.82c-.24-.24-.34-.27-.67-.19.24-.24.27-.34.19-.67.24.24.34.27.67.19-.24.24-.27.34-.19.67Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M451.98,51.57c.21.08.28.07.45-.06-.08.21-.07.28.06.45-.21-.08-.28-.07-.45.06.08-.21.07-.28-.06-.45Z"/>
                          <path class="cls-183" d="M451.98,51.57c.21.08.28.07.45-.06-.08.21-.07.28.06.45-.21-.08-.28-.07-.45.06.08-.21.07-.28-.06-.45Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M449.07,63.91c.26.06.33.04.52-.15-.06.26-.04.33.15.52-.26-.06-.33-.04-.52.15.06-.26.04-.33-.15-.52Z"/>
                          <path class="cls-178" d="M449.07,63.91c.26.06.33.04.52-.15-.06.26-.04.33.15.52-.26-.06-.33-.04-.52.15.06-.26.04-.33-.15-.52Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M446.83,41.47c0-.27-.05-.34-.28-.47.27,0,.34-.05.47-.28,0,.27.05.34.28.47-.27,0-.34.05-.47.28Z"/>
                          <path class="cls-40" d="M446.83,41.47c0-.27-.05-.34-.28-.47.27,0,.34-.05.47-.28,0,.27.05.34.28.47-.27,0-.34.05-.47.28Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M445.25,70.56c.16.04.2.03.32-.08-.04.16-.03.2.08.32-.16-.04-.2-.03-.32.08.04-.16.03-.2-.08-.32Z"/>
                          <path class="cls-25" d="M445.25,70.56c.16.04.2.03.32-.08-.04.16-.03.2.08.32-.16-.04-.2-.03-.32.08.04-.16.03-.2-.08-.32Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M439.26,59.75c-.16-.1-.22-.1-.38-.01.1-.16.1-.22.01-.38.16.1.22.1.38.01-.1.16-.1.22-.01.38Z"/>
                          <path class="cls-51" d="M439.26,59.75c-.16-.1-.22-.1-.38-.01.1-.16.1-.22.01-.38.16.1.22.1.38.01-.1.16-.1.22-.01.38Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M434.38,52.13c-.36.01-.45.07-.62.38-.01-.36-.07-.45-.38-.62.36-.01.45-.07.62-.38.01.36.07.45.38.62Z"/>
                          <path class="cls-240" d="M434.38,52.13c-.36.01-.45.07-.62.38-.01-.36-.07-.45-.38-.62.36-.01.45-.07.62-.38.01.36.07.45.38.62Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M428.13,28.66c-.3-.22-.41-.23-.75-.08.22-.3.23-.41.08-.75.3.22.41.23.75.08-.22.3-.23.41-.08.75Z"/>
                          <path class="cls-214" d="M428.13,28.66c-.3-.22-.41-.23-.75-.08.22-.3.23-.41.08-.75.3.22.41.23.75.08-.22.3-.23.41-.08.75Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M420.98,44.57c-.18-.1-.24-.1-.42,0,.1-.18.1-.24,0-.42.18.1.24.1.42,0-.1.18-.1.24,0,.42Z"/>
                          <path class="cls-44" d="M420.98,44.57c-.18-.1-.24-.1-.42,0,.1-.18.1-.24,0-.42.18.1.24.1.42,0-.1.18-.1.24,0,.42Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M417.29,54.84c-.16.13-.18.19-.15.39-.13-.16-.19-.18-.39-.15.16-.13.18-.19.15-.39.13.16.19.18.39.15Z"/>
                          <path class="cls-231" d="M417.29,54.84c-.16.13-.18.19-.15.39-.13-.16-.19-.18-.39-.15.16-.13.18-.19.15-.39.13.16.19.18.39.15Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M413.99,23.41c.28-.02.36-.07.48-.33.02.28.07.36.33.48-.28.02-.36.07-.48.33-.02-.28-.07-.36-.33-.48Z"/>
                          <path class="cls-141" d="M413.99,23.41c.28-.02.36-.07.48-.33.02.28.07.36.33.48-.28.02-.36.07-.48.33-.02-.28-.07-.36-.33-.48Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M412.55,16.02c-.11-.12-.16-.14-.32-.11.12-.11.14-.16.11-.32.11.12.16.14.32.11-.12.11-.14.16-.11.32Z"/>
                          <path class="cls-74" d="M412.55,16.02c-.11-.12-.16-.14-.32-.11.12-.11.14-.16.11-.32.11.12.16.14.32.11-.12.11-.14.16-.11.32Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M407.93,34.61c.33.03.42,0,.61-.27-.03.33,0,.42.27.61-.33-.03-.42,0-.61.27.03-.33,0-.42-.27-.61Z"/>
                          <path class="cls-167" d="M407.93,34.61c.33.03.42,0,.61-.27-.03.33,0,.42.27.61-.33-.03-.42,0-.61.27.03-.33,0-.42-.27-.61Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M406.04,27.74c-.17.34-.16.45.04.77-.34-.17-.45-.16-.77.04.17-.34.16-.45-.04-.77.34.17.45.16.77-.04Z"/>
                          <path class="cls-241" d="M406.04,27.74c-.17.34-.16.45.04.77-.34-.17-.45-.16-.77.04.17-.34.16-.45-.04-.77.34.17.45.16.77-.04Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M404.17,26.32c-.07.19-.06.25.06.4-.19-.07-.25-.06-.4.06.07-.19.06-.25-.06-.4.19.07.25.06.4-.06Z"/>
                          <path class="cls-103" d="M404.17,26.32c-.07.19-.06.25.06.4-.19-.07-.25-.06-.4.06.07-.19.06-.25-.06-.4.19.07.25.06.4-.06Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M401.77,58.11c.01-.19-.02-.25-.18-.35.19.01.25-.02.35-.18-.01.19.02.25.18.35-.19-.01-.25.02-.35.18Z"/>
                          <path class="cls-189" d="M401.77,58.11c.01-.19-.02-.25-.18-.35.19.01.25-.02.35-.18-.01.19.02.25.18.35-.19-.01-.25.02-.35.18Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M396.77,54.89c-.05.28-.02.37.2.55-.28-.05-.37-.02-.55.2.05-.28.02-.37-.2-.55.28.05.37.02.55-.2Z"/>
                          <path class="cls-248" d="M396.77,54.89c-.05.28-.02.37.2.55-.28-.05-.37-.02-.55.2.05-.28.02-.37-.2-.55.28.05.37.02.55-.2Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M390.13,27.27c-.02.21,0,.26.17.39-.21-.02-.26,0-.39.17.02-.21,0-.26-.17-.39.21.02.26,0,.39-.17Z"/>
                          <path class="cls-199" d="M390.13,27.27c-.02.21,0,.26.17.39-.21-.02-.26,0-.39.17.02-.21,0-.26-.17-.39.21.02.26,0,.39-.17Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M383.71,20.88c-.26.26-.29.36-.21.72-.26-.26-.36-.29-.72-.21.26-.26.29-.36.21-.72.26.26.36.29.72.21Z"/>
                          <path class="cls-102" d="M383.71,20.88c-.26.26-.29.36-.21.72-.26-.26-.36-.29-.72-.21.26-.26.29-.36.21-.72.26.26.36.29.72.21Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M380.51,32.48c.03-.17.01-.22-.11-.33.17.03.22.01.33-.11-.03.17-.01.22.11.33-.17-.03-.22-.01-.33.11Z"/>
                          <path class="cls-92" d="M380.51,32.48c.03-.17.01-.22-.11-.33.17.03.22.01.33-.11-.03.17-.01.22.11.33-.17-.03-.22-.01-.33.11Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M379.64,48.84c-.24.3-.26.41-.13.78-.3-.24-.41-.26-.78-.13.24-.3.26-.41.13-.78.3.24.41.26.78.13Z"/>
                          <path class="cls-260" d="M379.64,48.84c-.24.3-.26.41-.13.78-.3-.24-.41-.26-.78-.13.24-.3.26-.41.13-.78.3.24.41.26.78.13Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M374.25,14.6c.29.25.41.27.77.14-.25.29-.27.41-.14.77-.29-.25-.41-.27-.77-.14.25-.29.27-.41.14-.77Z"/>
                          <path class="cls-138" d="M374.25,14.6c.29.25.41.27.77.14-.25.29-.27.41-.14.77-.29-.25-.41-.27-.77-.14.25-.29.27-.41.14-.77Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M371.79,71.33c-.26-.09-.34-.07-.55.1.09-.26.07-.34-.1-.55.26.09.34.07.55-.1-.09.26-.07.34.1.55Z"/>
                          <path class="cls-132" d="M371.79,71.33c-.26-.09-.34-.07-.55.1.09-.26.07-.34-.1-.55.26.09.34.07.55-.1-.09.26-.07.34.1.55Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M366.99,28.61c-.29-.2-.4-.2-.72-.05.2-.29.2-.4.05-.72.29.2.4.2.72.05-.2.29-.2.4-.05.72Z"/>
                          <path class="cls-145" d="M366.99,28.61c-.29-.2-.4-.2-.72-.05.2-.29.2-.4.05-.72.29.2.4.2.72.05-.2.29-.2.4-.05.72Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M363.98,35.17c.2-.32.21-.43.04-.77.32.2.43.21.77.04-.2.32-.21.43-.04.77-.32-.2-.43-.21-.77-.04Z"/>
                          <path class="cls-41" d="M363.98,35.17c.2-.32.21-.43.04-.77.32.2.43.21.77.04-.2.32-.21.43-.04.77-.32-.2-.43-.21-.77-.04Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M358.41,72.13c-.08-.22-.13-.26-.36-.31.22-.08.26-.13.31-.36.08.22.13.26.36.31-.22.08-.26.13-.31.36Z"/>
                          <path class="cls-9" d="M358.41,72.13c-.08-.22-.13-.26-.36-.31.22-.08.26-.13.31-.36.08.22.13.26.36.31-.22.08-.26.13-.31.36Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M353.92,42.03c-.09.24-.08.31.08.51-.24-.09-.31-.08-.51.08.09-.24.08-.31-.08-.51.24.09.31.08.51-.08Z"/>
                          <path class="cls-81" d="M353.92,42.03c-.09.24-.08.31.08.51-.24-.09-.31-.08-.51.08.09-.24.08-.31-.08-.51.24.09.31.08.51-.08Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M349.26,25.48c.16-.04.2-.08.25-.24.04.16.08.2.24.25-.16.04-.2.08-.25.24-.04-.16-.08-.2-.24-.25Z"/>
                          <path class="cls-146" d="M349.26,25.48c.16-.04.2-.08.25-.24.04.16.08.2.24.25-.16.04-.2.08-.25.24-.04-.16-.08-.2-.24-.25Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M346.69,58.69c.07-.3.04-.39-.18-.6.3.07.39.04.6-.18-.07.3-.04.39.18.6-.3-.07-.39-.04-.6.18Z"/>
                          <path class="cls-255" d="M346.69,58.69c.07-.3.04-.39-.18-.6.3.07.39.04.6-.18-.07.3-.04.39.18.6-.3-.07-.39-.04-.6.18Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M343.66,70.5c.17-.33.16-.44-.03-.75.33.17.44.16.75-.03-.17.33-.16.44.03.75-.33-.17-.44-.16-.75.03Z"/>
                          <path class="cls-194" d="M343.66,70.5c.17-.33.16-.44-.03-.75.33.17.44.16.75-.03-.17.33-.16.44.03.75-.33-.17-.44-.16-.75.03Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M340.31,67.9c.19-.16.22-.24.17-.48.16.19.24.22.48.17-.19.16-.22.24-.17.48-.16-.19-.24-.22-.48-.17Z"/>
                          <path class="cls-75" d="M340.31,67.9c.19-.16.22-.24.17-.48.16.19.24.22.48.17-.19.16-.22.24-.17.48-.16-.19-.24-.22-.48-.17Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M335.73,69.64c.13-.09.15-.14.14-.3.09.13.14.15.3.14-.13.09-.15.14-.14.3-.09-.13-.14-.15-.3-.14Z"/>
                          <path class="cls-118" d="M335.73,69.64c.13-.09.15-.14.14-.3.09.13.14.15.3.14-.13.09-.15.14-.14.3-.09-.13-.14-.15-.3-.14Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M330.95,31.66c.3.24.41.26.77.13-.24.3-.26.41-.13.77-.3-.24-.41-.26-.77-.13.24-.3.26-.41.13-.77Z"/>
                          <path class="cls-201" d="M330.95,31.66c.3.24.41.26.77.13-.24.3-.26.41-.13.77-.3-.24-.41-.26-.77-.13.24-.3.26-.41.13-.77Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M325.84,47.34c-.25-.14-.33-.13-.58,0,.14-.25.13-.33,0-.58.25.14.33.13.58,0-.14.25-.13.33,0,.58Z"/>
                          <path class="cls-251" d="M325.84,47.34c-.25-.14-.33-.13-.58,0,.14-.25.13-.33,0-.58.25.14.33.13.58,0-.14.25-.13.33,0,.58Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M318.94,58.51c-.36-.13-.48-.11-.78.14.13-.36.11-.48-.14-.78.36.13.48.11.78-.14-.13.36-.11.48.14.78Z"/>
                          <path class="cls-7" d="M318.94,58.51c-.36-.13-.48-.11-.78.14.13-.36.11-.48-.14-.78.36.13.48.11.78-.14-.13.36-.11.48.14.78Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M311.81,23.67c.24-.11.29-.18.32-.44.11.24.18.29.44.32-.24.11-.29.18-.32.44-.11-.24-.18-.29-.44-.32Z"/>
                          <path class="cls-266" d="M311.81,23.67c.24-.11.29-.18.32-.44.11.24.18.29.44.32-.24.11-.29.18-.32.44-.11-.24-.18-.29-.44-.32Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M308.87,39.67c.1-.33.07-.43-.16-.68.33.1.43.07.68-.16-.1.33-.07.43.16.68-.33-.1-.43-.07-.68.16Z"/>
                          <path class="cls-20" d="M308.87,39.67c.1-.33.07-.43-.16-.68.33.1.43.07.68-.16-.1.33-.07.43.16.68-.33-.1-.43-.07-.68.16Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M302.79,43.5c.08.25.13.31.39.38-.25.08-.31.13-.38.39-.08-.25-.13-.31-.39-.38.25-.08.31-.13.38-.39Z"/>
                          <path class="cls-34" d="M302.79,43.5c.08.25.13.31.39.38-.25.08-.31.13-.38.39-.08-.25-.13-.31-.39-.38.25-.08.31-.13.38-.39Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M297.09,62.01c-.17-.14-.24-.15-.45-.08.14-.17.15-.24.08-.45.17.14.24.15.45.08-.14.17-.15.24-.08.45Z"/>
                          <path class="cls-52" d="M297.09,62.01c-.17-.14-.24-.15-.45-.08.14-.17.15-.24.08-.45.17.14.24.15.45.08-.14.17-.15.24-.08.45Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M295.24,54.3c-.13-.11-.18-.12-.35-.07.11-.13.12-.18.07-.35.13.11.18.12.35.07-.11.13-.12.18-.07.35Z"/>
                          <path class="cls-59" d="M295.24,54.3c-.13-.11-.18-.12-.35-.07.11-.13.12-.18.07-.35.13.11.18.12.35.07-.11.13-.12.18-.07.35Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M292.58,43.81c-.17-.09-.23-.09-.4,0,.09-.17.09-.23,0-.4.17.09.23.09.4,0-.09.17-.09.23,0,.4Z"/>
                          <path class="cls-23" d="M292.58,43.81c-.17-.09-.23-.09-.4,0,.09-.17.09-.23,0-.4.17.09.23.09.4,0-.09.17-.09.23,0,.4Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M289.66,50.65c-.12.14-.12.2-.06.37-.14-.12-.2-.12-.37-.06.12-.14.12-.2.06-.37.14.12.2.12.37.06Z"/>
                          <path class="cls-227" d="M289.66,50.65c-.12.14-.12.2-.06.37-.14-.12-.2-.12-.37-.06.12-.14.12-.2.06-.37.14.12.2.12.37.06Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M285.17,39.18c-.06.15-.06.2.04.34-.15-.06-.2-.06-.34.04.06-.15.06-.2-.04-.34.15.06.2.06.34-.04Z"/>
                          <path class="cls-158" d="M285.17,39.18c-.06.15-.06.2.04.34-.15-.06-.2-.06-.34.04.06-.15.06-.2-.04-.34.15.06.2.06.34-.04Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M278.54,63.73c-.27-.12-.36-.11-.6.06.12-.27.11-.36-.06-.6.27.12.36.11.6-.06-.12.27-.11.36.06.6Z"/>
                          <path class="cls-62" d="M278.54,63.73c-.27-.12-.36-.11-.6.06.12-.27.11-.36-.06-.6.27.12.36.11.6-.06-.12.27-.11.36.06.6Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M272.7,59.52c0-.24-.05-.3-.25-.41.24,0,.3-.05.41-.25,0,.24.05.3.25.41-.24,0-.3.05-.41.25Z"/>
                          <path class="cls-254" d="M272.7,59.52c0-.24-.05-.3-.25-.41.24,0,.3-.05.41-.25,0,.24.05.3.25.41-.24,0-.3.05-.41.25Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M268.36,25.59c-.21.05-.26.1-.32.31-.05-.21-.1-.26-.31-.32.21-.05.26-.1.32-.31.05.21.1.26.31.32Z"/>
                          <path class="cls-228" d="M268.36,25.59c-.21.05-.26.1-.32.31-.05-.21-.1-.26-.31-.32.21-.05.26-.1.32-.31.05.21.1.26.31.32Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M261.24,61.68c-.09-.32-.17-.4-.49-.48.32-.09.4-.17.48-.49.09.32.17.4.49.48-.32.09-.4.17-.48.49Z"/>
                          <path class="cls-17" d="M261.24,61.68c-.09-.32-.17-.4-.49-.48.32-.09.4-.17.48-.49.09.32.17.4.49.48-.32.09-.4.17-.48.49Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M255.39,30.56c-.1.16-.1.22-.01.39-.16-.1-.22-.1-.39-.01.1-.16.1-.22.01-.39.16.1.22.1.39.01Z"/>
                          <path class="cls-57" d="M255.39,30.56c-.1.16-.1.22-.01.39-.16-.1-.22-.1-.39-.01.1-.16.1-.22.01-.39.16.1.22.1.39.01Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M249.1,27.59c.05-.16.04-.21-.08-.34.16.05.21.04.34-.08-.05.16-.04.21.08.34-.16-.05-.21-.04-.34.08Z"/>
                          <path class="cls-229" d="M249.1,27.59c.05-.16.04-.21-.08-.34.16.05.21.04.34-.08-.05.16-.04.21.08.34-.16-.05-.21-.04-.34.08Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M246.89,35.97c-.21.26-.22.36-.1.68-.26-.21-.36-.22-.68-.1.21-.26.22-.36.1-.68.26.21.36.22.68.1Z"/>
                          <path class="cls-264" d="M246.89,35.97c-.21.26-.22.36-.1.68-.26-.21-.36-.22-.68-.1.21-.26.22-.36.1-.68.26.21.36.22.68.1Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M243.93,25.46c.25.19.35.21.64.09-.19.25-.21.35-.09.64-.25-.19-.35-.21-.64-.09.19-.25.21-.35.09-.64Z"/>
                          <path class="cls-198" d="M243.93,25.46c.25.19.35.21.64.09-.19.25-.21.35-.09.64-.25-.19-.35-.21-.64-.09.19-.25.21-.35.09-.64Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M238.5,64.44c.19-.16.21-.24.17-.48.16.19.24.21.48.17-.19.16-.21.24-.17.48-.16-.19-.24-.21-.48-.17Z"/>
                          <path class="cls-54" d="M238.5,64.44c.19-.16.21-.24.17-.48.16.19.24.21.48.17-.19.16-.21.24-.17.48-.16-.19-.24-.21-.48-.17Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M235.14,39.72c-.12.28-.11.37.07.61-.28-.12-.37-.11-.61.07.12-.28.11-.37-.07-.61.28.12.37.11.61-.07Z"/>
                          <path class="cls-245" d="M235.14,39.72c-.12.28-.11.37.07.61-.28-.12-.37-.11-.61.07.12-.28.11-.37-.07-.61.28.12.37.11.61-.07Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M232.85,24.01c-.14-.11-.19-.12-.36-.06.11-.14.12-.19.06-.36.14.11.19.12.36.06-.11.14-.12.19-.06.36Z"/>
                          <path class="cls-236" d="M232.85,24.01c-.14-.11-.19-.12-.36-.06.11-.14.12-.19.06-.36.14.11.19.12.36.06-.11.14-.12.19-.06.36Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M226.83,36.06c.16,0,.2-.01.29-.15,0,.16.01.2.15.29-.16,0-.2.01-.29.15,0-.16-.01-.2-.15-.29Z"/>
                          <path class="cls-169" d="M226.83,36.06c.16,0,.2-.01.29-.15,0,.16.01.2.15.29-.16,0-.2.01-.29.15,0-.16-.01-.2-.15-.29Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M225.11,60.18c-.08-.2-.13-.24-.34-.27.2-.08.24-.13.27-.34.08.2.13.24.34.27-.2.08-.24.13-.27.34Z"/>
                          <path class="cls-55" d="M225.11,60.18c-.08-.2-.13-.24-.34-.27.2-.08.24-.13.27-.34.08.2.13.24.34.27-.2.08-.24.13-.27.34Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M221.33,25.99c.11-.14.12-.2.05-.37.14.11.2.12.37.05-.11.14-.12.2-.05.37-.14-.11-.2-.12-.37-.05Z"/>
                          <path class="cls-209" d="M221.33,25.99c.11-.14.12-.2.05-.37.14.11.2.12.37.05-.11.14-.12.2-.05.37-.14-.11-.2-.12-.37-.05Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M215.69,15.33c-.29-.18-.4-.18-.7-.02.18-.29.18-.4.02-.7.29.18.4.18.7.02-.18.29-.18.4-.02.7Z"/>
                          <path class="cls-63" d="M215.69,15.33c-.29-.18-.4-.18-.7-.02.18-.29.18-.4.02-.7.29.18.4.18.7.02-.18.29-.18.4-.02.7Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M213.46,68.91c.17-.11.2-.16.2-.36.11.17.16.2.36.2-.17.11-.2.16-.2.36-.11-.17-.16-.2-.36-.2Z"/>
                          <path class="cls-163" d="M213.46,68.91c.17-.11.2-.16.2-.36.11.17.16.2.36.2-.17.11-.2.16-.2.36-.11-.17-.16-.2-.36-.2Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M206.67,39.3c-.05.22-.03.29.13.45-.22-.05-.29-.03-.45.13.05-.22.03-.29-.13-.45.22.05.29.03.45-.13Z"/>
                          <path class="cls-85" d="M206.67,39.3c-.05.22-.03.29.13.45-.22-.05-.29-.03-.45.13.05-.22.03-.29-.13-.45.22.05.29.03.45-.13Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M200.9,20.94c-.34-.14-.45-.12-.74.1.14-.34.12-.45-.1-.74.34.14.45.12.74-.1-.14.34-.12.45.1.74Z"/>
                          <path class="cls-68" d="M200.9,20.94c-.34-.14-.45-.12-.74.1.14-.34.12-.45-.1-.74.34.14.45.12.74-.1-.14.34-.12.45.1.74Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M195.66,16.7c-.07-.25-.13-.31-.38-.37.25-.07.31-.13.37-.38.07.25.13.31.38.37-.25.07-.31.13-.37.38Z"/>
                          <path class="cls-16" d="M195.66,16.7c-.07-.25-.13-.31-.38-.37.25-.07.31-.13.37-.38.07.25.13.31.38.37-.25.07-.31.13-.37.38Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M191.48,66.37c.18-.15.2-.21.17-.44.15.18.21.2.44.17-.18.15-.2.21-.17.44-.15-.18-.21-.2-.44-.17Z"/>
                          <path class="cls-168" d="M191.48,66.37c.18-.15.2-.21.17-.44.15.18.21.2.44.17-.18.15-.2.21-.17.44-.15-.18-.21-.2-.44-.17Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M184.83,22.13c.25-.1.31-.16.35-.43.1.25.16.31.43.35-.25.1-.31.16-.35.43-.1-.25-.16-.31-.43-.35Z"/>
                          <path class="cls-261" d="M184.83,22.13c.25-.1.31-.16.35-.43.1.25.16.31.43.35-.25.1-.31.16-.35.43-.1-.25-.16-.31-.43-.35Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M179.97,16.74c.15.21.22.25.48.23-.21.15-.25.22-.23.48-.15-.21-.22-.25-.48-.23.21-.15.25-.22.23-.48Z"/>
                          <path class="cls-53" d="M179.97,16.74c.15.21.22.25.48.23-.21.15-.25.22-.23.48-.15-.21-.22-.25-.48-.23.21-.15.25-.22.23-.48Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M177.76,47.31c0-.26-.03-.33-.25-.47.26,0,.33-.03.47-.25,0,.26.03.33.25.47-.26,0-.33.03-.47.25Z"/>
                          <path class="cls-14" d="M177.76,47.31c0-.26-.03-.33-.25-.47.26,0,.33-.03.47-.25,0,.26.03.33.25.47-.26,0-.33.03-.47.25Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M172.54,32.42c.11.13.16.15.34.12-.13.11-.15.16-.12.34-.11-.13-.16-.15-.34-.12.13-.11.15-.16.12-.34Z"/>
                          <path class="cls-65" d="M172.54,32.42c.11.13.16.15.34.12-.13.11-.15.16-.12.34-.11-.13-.16-.15-.34-.12.13-.11.15-.16.12-.34Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M169.08,71.82c-.25-.08-.33-.06-.52.12.08-.25.06-.33-.12-.52.25.08.33.06.52-.12-.08.25-.06.33.12.52Z"/>
                          <path class="cls-130" d="M169.08,71.82c-.25-.08-.33-.06-.52.12.08-.25.06-.33-.12-.52.25.08.33.06.52-.12-.08.25-.06.33.12.52Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M163.81,52.35c.29.11.38.09.62-.1-.11.29-.09.38.1.62-.29-.11-.38-.09-.62.1.11-.29.09-.38-.1-.62Z"/>
                          <path class="cls-105" d="M163.81,52.35c.29.11.38.09.62-.1-.11.29-.09.38.1.62-.29-.11-.38-.09-.62.1.11-.29.09-.38-.1-.62Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M161.81,42c-.03.33,0,.42.27.62-.33-.03-.42,0-.62.27.03-.33,0-.42-.27-.62.33.03.42,0,.62-.27Z"/>
                          <path class="cls-213" d="M161.81,42c-.03.33,0,.42.27.62-.33-.03-.42,0-.62.27.03-.33,0-.42-.27-.62.33.03.42,0,.62-.27Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M155.02,63.06c-.3-.06-.38-.03-.59.19.06-.3.03-.38-.19-.59.3.06.38.03.59-.19-.06.3-.03.38.19.59Z"/>
                          <path class="cls-161" d="M155.02,63.06c-.3-.06-.38-.03-.59.19.06-.3.03-.38-.19-.59.3.06.38.03.59-.19-.06.3-.03.38.19.59Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M148.12,50.66c-.18-.25-.26-.29-.57-.26.25-.18.29-.26.26-.57.18.25.26.29.57.26-.25.18-.29.26-.26.57Z"/>
                          <path class="cls-257" d="M148.12,50.66c-.18-.25-.26-.29-.57-.26.25-.18.29-.26.26-.57.18.25.26.29.57.26-.25.18-.29.26-.26.57Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M146.62,23.1c-.07.16-.07.21.03.36-.16-.07-.21-.07-.36.03.07-.16.07-.21-.03-.36.16.07.21.07.36-.03Z"/>
                          <path class="cls-195" d="M146.62,23.1c-.07.16-.07.21.03.36-.16-.07-.21-.07-.36.03.07-.16.07-.21-.03-.36.16.07.21.07.36-.03Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M144.98,21.62c.08.23.14.28.38.33-.23.08-.28.14-.33.38-.08-.23-.14-.28-.38-.33.23-.08.28-.14.33-.38Z"/>
                          <path class="cls-58" d="M144.98,21.62c.08.23.14.28.38.33-.23.08-.28.14-.33.38-.08-.23-.14-.28-.38-.33.23-.08.28-.14.33-.38Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M139.5,60.08c.38-.04.48-.1.64-.45.04.38.1.48.45.64-.38.04-.48.1-.64.45-.04-.38-.1-.48-.45-.64Z"/>
                          <path class="cls-204" d="M139.5,60.08c.38-.04.48-.1.64-.45.04.38.1.48.45.64-.38.04-.48.1-.64.45-.04-.38-.1-.48-.45-.64Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M132.18,33.92c.35.13.46.11.75-.12-.13.35-.11.46.12.75-.35-.13-.46-.11-.75.12.13-.35.11-.46-.12-.75Z"/>
                          <path class="cls-181" d="M132.18,33.92c.35.13.46.11.75-.12-.13.35-.11.46.12.75-.35-.13-.46-.11-.75.12.13-.35.11-.46-.12-.75Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M128.21,16.38c.16-.02.2-.05.27-.2.02.16.05.2.2.27-.16.02-.2.05-.27.2-.02-.16-.05-.2-.2-.27Z"/>
                          <path class="cls-233" d="M128.21,16.38c.16-.02.2-.05.27-.2.02.16.05.2.2.27-.16.02-.2.05-.27.2-.02-.16-.05-.2-.2-.27Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M124.7,32.02c-.09-.26-.15-.32-.42-.38.26-.09.32-.15.38-.42.09.26.15.32.42.38-.26.09-.32.15-.38.42Z"/>
                          <path class="cls-235" d="M124.7,32.02c-.09-.26-.15-.32-.42-.38.26-.09.32-.15.38-.42.09.26.15.32.42.38-.26.09-.32.15-.38.42Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M122.02,59.62c.3-.25.34-.36.28-.75.25.3.36.34.75.28-.3.25-.34.36-.28.75-.25-.3-.36-.34-.75-.28Z"/>
                          <path class="cls-207" d="M122.02,59.62c.3-.25.34-.36.28-.75.25.3.36.34.75.28-.3.25-.34.36-.28.75-.25-.3-.36-.34-.75-.28Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M115.72,43.36c.18-.25.19-.34.08-.62.25.18.34.19.62.08-.18.25-.19.34-.08.62-.25-.18-.34-.19-.62-.08Z"/>
                          <path class="cls-39" d="M115.72,43.36c.18-.25.19-.34.08-.62.25.18.34.19.62.08-.18.25-.19.34-.08.62-.25-.18-.34-.19-.62-.08Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M111.23,46.3c.05-.25.03-.32-.16-.49.25.05.32.03.49-.16-.05.25-.03.32.16.49-.25-.05-.32-.03-.49.16Z"/>
                          <path class="cls-170" d="M111.23,46.3c.05-.25.03-.32-.16-.49.25.05.32.03.49-.16-.05.25-.03.32.16.49-.25-.05-.32-.03-.49.16Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M104.43,62.41c.13.12.19.13.36.08-.12.13-.13.19-.08.36-.13-.12-.19-.13-.36-.08.12-.13.13-.19.08-.36Z"/>
                          <path class="cls-87" d="M104.43,62.41c.13.12.19.13.36.08-.12.13-.13.19-.08.36-.13-.12-.19-.13-.36-.08.12-.13.13-.19.08-.36Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M99.95,21.66c-.09.17-.09.23.01.4-.17-.09-.23-.09-.4.01.09-.17.09-.23-.01-.4.17.09.23.09.4-.01Z"/>
                          <path class="cls-226" d="M99.95,21.66c-.09.17-.09.23.01.4-.17-.09-.23-.09-.4.01.09-.17.09-.23-.01-.4.17.09.23.09.4-.01Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M97.39,37.94c-.03.24,0,.31.2.46-.24-.03-.31,0-.46.2.03-.24,0-.31-.2-.46.24.03.31,0,.46-.2Z"/>
                          <path class="cls-210" d="M97.39,37.94c-.03.24,0,.31.2.46-.24-.03-.31,0-.46.2.03-.24,0-.31-.2-.46.24.03.31,0,.46-.2Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M95.2,49.16c-.05.21-.04.27.11.42-.21-.05-.27-.04-.42.11.05-.21.04-.27-.11-.42.21.05.27.04.42-.11Z"/>
                          <path class="cls-258" d="M95.2,49.16c-.05.21-.04.27.11.42-.21-.05-.27-.04-.42.11.05-.21.04-.27-.11-.42.21.05.27.04.42-.11Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M92.98,40.12c.04-.19.02-.24-.12-.37.19.04.24.02.37-.12-.04.19-.02.24.12.37-.19-.04-.24-.02-.37.12Z"/>
                          <path class="cls-263" d="M92.98,40.12c.04-.19.02-.24-.12-.37.19.04.24.02.37-.12-.04.19-.02.24.12.37-.19-.04-.24-.02-.37.12Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M90.82,31.73c.24-.26.26-.36.16-.7.26.24.36.26.7.16-.24.26-.26.36-.16.7-.26-.24-.36-.26-.7-.16Z"/>
                          <path class="cls-64" d="M90.82,31.73c.24-.26.26-.36.16-.7.26.24.36.26.7.16-.24.26-.26.36-.16.7-.26-.24-.36-.26-.7-.16Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M87.28,22.25c.16-.09.19-.13.2-.32.09.16.13.19.32.2-.16.09-.19.13-.2.32-.09-.16-.13-.19-.32-.2Z"/>
                          <path class="cls-11" d="M87.28,22.25c.16-.09.19-.13.2-.32.09.16.13.19.32.2-.16.09-.19.13-.2.32-.09-.16-.13-.19-.32-.2Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M82.43,64.48c-.33-.14-.44-.13-.73.08.14-.33.13-.44-.08-.73.33.14.44.13.73-.08-.14.33-.13.44.08.73Z"/>
                          <path class="cls-205" d="M82.43,64.48c-.33-.14-.44-.13-.73.08.14-.33.13-.44-.08-.73.33.14.44.13.73-.08-.14.33-.13.44.08.73Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M75.31,29.64c.14-.08.16-.12.17-.28.08.14.12.16.28.17-.14.08-.16.12-.17.28-.08-.14-.12-.16-.28-.17Z"/>
                          <path class="cls-5" d="M75.31,29.64c.14-.08.16-.12.17-.28.08.14.12.16.28.17-.14.08-.16.12-.17.28-.08-.14-.12-.16-.28-.17Z"/>
                        </g>
                        <g>
                          <path class="cls-279" d="M68.9,37.93c0-.29-.05-.36-.31-.5.29,0,.36-.05.5-.31,0,.29.05.36.31.5-.29,0-.36.05-.5.31Z"/>
                          <path class="cls-76" d="M68.9,37.93c0-.29-.05-.36-.31-.5.29,0,.36-.05.5-.31,0,.29.05.36.31.5-.29,0-.36.05-.5.31Z"/>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="hollywood-sign">
                    <g id="hill">
                      <g>
                        <path class="cls-286" d="M1250.25,229.7l.11,19.11h-97.84s-31.32-.04-83.77,3.15c-49.64,3.01-144.54-14.01-330.37-18.21-122.01-2.76-234.68,3.71-265.87,5.73-.47-2.39-28.44-9.38-101.29-26.02,2.17.35,81.99,13.12,126,6.67l373.09-.04s104.97-16.14,230.82-10.85c125.85,5.29,149.12,20.46,149.12,20.46Z"/>
                        <path class="cls-286" d="M870.31,220.09l-373.09.04c135.42-77.41,373.09-.04,373.09-.04Z"/>
                        <path class="cls-288" d="M605.89,138.38l-108.67,81.75c-44.01,6.45-123.83-6.32-126-6.67-.03-.01-.05-.01-.05-.01,42.56-10.87,68.16-54.64,87-44.2,27.32,15.14,50.3-6.89,69.83-7.49,19.52-.59,24.53-7.09,39.36-21.61,4.53-4.43,8.72-7.65,12.36-9.99,20.18.44,26.17,8.22,26.17,8.22Z"/>
                        <path class="cls-286" d="M552.29,133.19c11.21-2.41,20.23-3.19,27.43-3.03-3.64,2.34-7.83,5.56-12.36,9.99-14.83,14.52-19.84,21.02-39.36,21.61-19.53.6-42.51,22.63-69.83,7.49-18.84-10.44-44.44,33.33-87,44.2,0,0,1.03-1.52,2.93-4.15,12.52-17.38,62.68-82.94,100.65-74.54,23.98,5.3,41.74,6.13,77.54-1.57Z"/>
                        <path class="cls-280" d="M472.51,239.48c1.11,5.59-149.6-14.28-226.85,5.65-108.79,28.06-205.86,20.88-219.51,19.68l21.13-55.51h326.82c-1.9,2.63-2.93,4.15-2.93,4.15,0,0,.02,0,.05.01,72.85,16.64,100.82,23.63,101.29,26.02Z"/>
                      </g>
                    </g>
                    <g id="sign">
                      <g>
                        <path class="cls-279" d="M548.71,139.63l.17,14.67-4.1,3.26-9.22.99v-20.17l8.86-1.09,4.29,2.34ZM544.28,152.68v-10.41l-1.26-.79-3.01.23v12.29l2.93-.26,1.34-1.06Z"/>
                        <path class="cls-279" d="M531.88,144.15v14.01l-4.04,3.26-5.11.2-4.07-2.57v-14.15l3.93-3.03,5.33-.26,3.96,2.54ZM527.42,156.54v-10.15l-1.25-.79h-1.81l-1.31.92v10.25l1.2.79h1.92l1.25-1.02Z"/>
                        <path class="cls-279" d="M515.49,144.51v14.24l-3.93,3.07-5.07.26-3.82-2.41v-14.07l3.88-3.07,5.12-.43,3.82,2.41ZM511.19,157.05v-10.1l-1.36-.83h-1.65l-1.31,1.03v10.25l1.31.69,1.73-.11,1.28-.93Z"/>
                        <polygon class="cls-279" points="499.91 142.7 496.68 162.44 494.11 162.48 491.94 155.42 489.74 162.84 487.12 162.84 484.41 143.29 488.62 143.22 489.79 150.87 490.88 143.09 493.05 142.96 495.2 150.51 496.4 142.7 499.91 142.7"/>
                        <polygon class="cls-279" points="482.91 140.88 478.61 155.19 478.61 161.55 473.37 161.55 473.37 155.12 469 141.48 473.51 141.31 476.08 149.49 478.48 141.05 482.91 140.88"/>
                        <polygon class="cls-279" points="470.09 157.04 470.09 161.16 457.91 161.16 457.91 141.57 462.37 141.57 462.37 157.33 470.09 157.04"/>
                        <polygon class="cls-279" points="455.85 157.53 455.85 161.55 443.73 161.55 443.73 142.1 448.16 142.1 448.16 157.86 455.85 157.53"/>
                        <path class="cls-279" d="M440.63,145.27v14.11l-3.74,3.36-4.54.56-3.79-2.41v-13.97l3.79-3.27,4.68-.62,3.59,2.24ZM436.56,157.93v-10.21l-1.12-.57-1.61.16-1.18.99v10.12l1.18.63,1.56-.17,1.18-.95Z"/>
                        <polygon class="cls-279" points="426.03 146.26 426.03 165.97 421.88 166.23 421.88 158.59 417.8 159.05 417.8 166.76 413.99 167.19 413.99 147.52 417.89 147.15 417.89 154.53 421.9 154.27 421.9 146.72 426.03 146.26"/>
                      </g>
                    </g>
                  </g>
                  <g id="sun">
                    <path class="cls-282" d="M212.42,209.29c-12.58,0-9.85,0-1.53-.01-1.05,0,3.06,0-9.72-.01,6.31,0,11.94,0-8.54-.01,3.95,0,15.25,0,9.12,0-16,0,4.19,0-.34,0-8.83,0,4.86,0,11,0h-5.09c-.38,0-.53,0-.51,0h-14.89c-.06,0-.1,0-.08,0h-24.93c5.09,0,1.08,0,0,0,0,0,0,.03,0,.04,2.11,0,4.32,0,7.29,0,15.14,0-2.82.02-7.28.03,0,0,0,0,0,0,.1,0-.12,0,0,0-.65.05-1.02.09-1.19.14,0,.03-.02.07-.02.1,1.4.53,25.56,1.05,3.36,1.57-6.47.6,20.71,1.18,4.38,1.76-2.67.58,3.72,1.14,3.21,1.7-8.74.55,2.07,1.1-4.97,1.63-12.2.26-1,.94-2.2,1.2-1.2.26-7.91.59-2.59.84-6.92.5-6.05,1.16,2.41,1.63,1.96.47,8.06.27,6.27.7-18.66.44,1.34.86-2.01,1.26,8.59.2,4.36.4,6.18.59,13.22.1,5.8.19-11.97.28-2.78.09-6.46.18-.77.27,7.68.18-5.13.36-5.81.53-6.21.17-6.12.33,3.45.49,8.34.08,20.93.16,12.54.23,23.63.08.09.15-6.61.23-1.38.07-15.88.15-8.6.22-7.75.07.4.14,13.72.21,9.28.07,7.1.13,12.75.2-1.18.07-10.68.13-5.03.19,3.91.12,13.75.24-5.1.35-12.31.11-2.77.22-2.28.32,2.92.1,1.06.19,11.76.27,2.2-.17,5.64-.37,7.67-.59-1.04-.11.87-.23-10.41-.35,8.57-.12,3.33-.25-.31-.39,10.3-.27,17.5-.57,7.57-.89-7.28-.08-16.86-.16-17.57-.24-6.53-.08,13.01-.17,6.56-.25-1.63-.17-9.08-.35,5.94-.53,10.5-.09-19.55-.18,5.81-.27,2.83-.09,6.05-.19,11.01-.28-4.31-.1-8.11-.19-5.69-.29,7.5-.1-1.55-.2,7.39-.3-9.06-.2-6.23-.41-5.51-.62-10.12-.21-6.47-.42-2.29-.64-5.37-.44-6.51-.89,3.46-1.36-8.58-.12-8.03-.24-8.49-.36-1.94-.12-1.92-.23-.07-.21,16.95.21,13.44-.65.6-.9,3.45-.06-5.98.05-1.04-.02,17.15-.06-1.03-.3,11.59-.36,4.2-.13-24.91-.26-3.22-.38-19.55-.13,7.71-.26-2.79-.39.81-.07,6.99.2,9.48.14,5.94-.07-.37-.13,1.89-.53-6.1-1.06,12.82-2.17-3.93-3.33,18.37-1.16.84-2.35,6.98-3.57Z"/>
                    <path class="cls-276" d="M212.41,209.37s0-.05,0-.07c0-12.56-10.19-22.75-22.75-22.75s-22.75,10.19-22.75,22.75c0,.02,0,.05,0,.07h45.5Z"/>
                  </g>
                  <g id="golden-gate">
                    <g>
                      <g>
                        <path class="cls-272" d="M409.76,194.78l-6.34,4.23s-33.17-1.07-80.49-1.93v-3.64c47.75.52,81.99,1.21,81.99,1.21l4.83.13Z"/>
                        <path class="cls-272" d="M322.93,197.08v24.32h-10.53v-24.49c3.58.05,7.09.11,10.53.18Z"/>
                        <path class="cls-272" d="M322.93,193.44v3.64c-3.44-.06-6.95-.13-10.53-.18v-3.55c3.58.03,7.09.06,10.53.09Z"/>
                        <path class="cls-272" d="M322.93,138.79v54.65c-3.44-.03-6.95-.06-10.53-.09v-35.32h7.11v-8.44h-7.11v-12.19c1.92-1.57,3.54-2.95,4.84-4.07,1.82,1.84,3.72,3.65,5.68,5.45ZM319.51,144.92v-7.98h-3.95v7.98h3.95ZM319.11,174.02v-10.8h-2.78v10.8h2.78ZM318.75,192.31v-12.69h-2.42v12.69h2.42Z"/>
                        <path class="cls-272" d="M322.93,132.2v6.59c-1.97-1.8-3.87-3.61-5.68-5.45.21-.19.43-.37.62-.54,1.92-.21,3.14-2.82,3.14-2.82.61.74,1.26,1.49,1.92,2.23Z"/>
                        <path class="cls-272" d="M317.87,132.79c2.05-1.79,3.14-2.82,3.14-2.82,0,0-1.21,2.61-3.14,2.82Z"/>
                        <path class="cls-272" d="M316.43,132.52c.27.28.54.55.82.82-1.3,1.12-2.92,2.49-4.84,4.07v-5.96c1.04-.96,1.59-1.47,1.59-1.47.87,1.37,1.69,2.17,2.44,2.54Z"/>
                        <rect class="cls-272" x="312.4" y="149.59" width="3.16" height="8.44"/>
                        <path class="cls-272" d="M312.4,193.35v3.55c-74.15-1.22-177.24-1.7-244.48,3v-3.54c26.64-1.86,65.23-2.82,106.86-3.21,46.18-.45,96.11-.21,137.62.2Z"/>
                        <path class="cls-272" d="M67.98,149.24l-.05.09v4.55c-1.2-.99-2.41-2.03-3.62-3.09.3-.39.57-.76.82-1.07.45-.34.9-.91,1.34-1.78.01-.03.02-.04.02-.04.49.45,1,.91,1.49,1.33Z"/>
                        <path class="cls-272" d="M67.92,199.9v21.48h-8.95v-20.82c2.9-.24,5.89-.47,8.95-.67Z"/>
                        <path class="cls-272" d="M67.92,196.36v3.54c-3.06.2-6.05.43-8.95.67v-3.5c.69-.06,1.39-.13,2.09-.19,1.44-.11,2.93-.23,4.46-.35.78-.05,1.59-.1,2.4-.16Z"/>
                        <path class="cls-272" d="M67.92,153.87v42.49c-.81.06-1.61.11-2.4.16v-9.89h-4.46v10.24c-.71.06-1.41.13-2.09.19v-39.52c.74-.93,1.45-1.8,2.09-2.63v4.53h4.46v-7.05h-2.48c.46-.59.88-1.12,1.26-1.61,1.21,1.06,2.42,2.09,3.62,3.09ZM65.53,182.45v-8.92h-4.46v8.92h4.46ZM65.53,169.75v-7.03h-4.46v7.03h4.46Z"/>
                        <path class="cls-272" d="M65.12,149.72c.77-1.01,1.24-1.64,1.34-1.78-.44.87-.89,1.44-1.34,1.78Z"/>
                        <path class="cls-272" d="M63.53,150.11l.77.68c-.38.49-.79,1.02-1.26,1.61h-1.98v2.52c-.64.83-1.35,1.7-2.09,2.63v-8.03c1.01-1.33,1.56-2.1,1.56-2.1l.02.03c.16.29,1.43,2.37,2.98,2.67Z"/>
                        <path class="cls-272" d="M58.98,197.07v3.5c-3.5.28-6.87.58-10.13.89l-5.52-2.57c4.24-.68,9.51-1.28,15.65-1.83Z"/>
                      </g>
                      <g>
                        <path class="cls-197" d="M58.98,197.07c-6.14.54-11.41,1.15-15.65,1.83l5.52,2.57c3.25-.31,6.63-.62,10.13-.89,2.9-.24,5.89-.47,8.95-.67,67.24-4.7,170.33-4.22,244.48-3,3.58.05,7.09.11,10.53.18,47.32.86,80.49,1.93,80.49,1.93l6.34-4.23-4.83-.13s-34.24-.69-81.99-1.21c-3.44-.03-6.95-.06-10.53-.09-41.51-.42-91.44-.65-137.62-.2-41.63.39-80.22,1.35-106.86,3.21-.81.06-1.61.11-2.4.16-1.53.13-3.02.24-4.46.35-.71.06-1.41.13-2.09.19Z"/>
                        <path class="cls-45" d="M410.67,194.13s-.19-.1-.57-.3c-6.29-3.41-63.03-34.56-87.17-61.63-.67-.74-1.31-1.49-1.92-2.23,0,0-1.21,2.61-3.14,2.82-.44.06-.92-.01-1.44-.28-.75-.38-1.57-1.17-2.44-2.54.79.86,1.6,1.7,2.44,2.54.27.28.54.55.82.82,1.82,1.84,3.72,3.65,5.68,5.45,31.79,29.19,81.99,55.86,81.99,55.86"/>
                        <path class="cls-45" d="M66.46,147.94c-.11.14-.57.77-1.34,1.78-.25.31-.52.68-.82,1.07-.38.49-.79,1.02-1.26,1.61-.59.77-1.25,1.61-1.98,2.52-.64.83-1.35,1.7-2.09,2.63-7.53,9.32-19.55,23.33-30.66,32.45"/>
                        <path class="cls-45" d="M321.01,129.97s-1.08,1.03-3.14,2.82c-.19.18-.41.35-.62.54-1.3,1.12-2.92,2.49-4.84,4.07-20.3,16.52-74.33,54.97-137.63,54.97-1.62,0-3.25-.03-4.89-.08-32.79-1.03-67.86-12.64-101.91-43.06-.49-.43-1-.88-1.49-1.33"/>
                        <path class="cls-45" d="M60.53,147.41s-.55.77-1.56,2.1c-4.39,5.84-17.45,22.65-30.66,34.01"/>
                        <path class="cls-45" d="M313.99,129.97s-.55.52-1.59,1.47c-10.36,9.37-70.09,60.42-142.52,60.85-32.53.21-67.63-9.81-101.96-38.42-1.2-.99-2.41-2.03-3.62-3.09l-.77-.68c-.99-.87-1.99-1.76-2.98-2.67"/>
                        <polyline class="cls-36" points="322.93 132.2 322.93 138.79 322.93 193.44 322.93 197.08 322.93 221.4 312.4 221.4 312.4 196.9 312.4 193.35 312.4 158.03 312.4 149.59 312.4 137.4 312.4 131.45"/>
                      </g>
                    </g>
                    <g>
                      <path class="cls-279" d="M354.32,150.2c1.52.06,2.99.08,4.46-.25.09.18.05.3-.12.41-.33.21-.63.45-.96.65-.1.06-.25.06-.37.1-.3.08-.59.17-.86.25-.02.08-.03.1-.02.11.21.53.11.96-.36,1.31-.33.24-.64.5-.97.73-.47.31-.77.78-1.11,1.21-1.27,1.57-2.88,2.55-4.9,2.83-.43-.16-.71.27-1.1.28-.21,0-.43.02-.64,0-.33-.03-.49.08-.59.41-.03.11-.12.22-.21.28-.03.02-.18-.09-.25-.17-.29-.35-.36-.75-.2-1.16.13-.32.07-.6-.07-.88-.32-.6-.18-1.14.39-1.53.1-.07.19-.15.36-.28-.53-.22-.97-.43-1.43-.59-1.38-.5-2.79-.58-4.23-.39-2.68.36-5.17,1.29-7.59,2.44-1.2.57-2.36,1.23-3.54,1.85-.09.04-.17.09-.26.13-.02-.02-.05-.03-.07-.05.1-.16.17-.36.31-.46.69-.53,1.37-1.09,2.1-1.55,2.48-1.58,5.13-2.8,7.9-3.77,1.64-.58,3.32-1.04,5.05-1.2,1.38-.13,2.77-.15,4.16-.22.2,0,.45.06.58-.04.13-.09.16-.35.22-.54.26-.79.47-1.59.43-2.43-.02-.36-.08-.71-.13-1.07-.15-1.14.09-2.17.93-3,1.7-1.69,3.61-3.12,5.64-4.4,2.34-1.48,4.68-2.94,7.2-4.09,1.56-.72,3.15-1.37,4.83-1.74.23-.05.46-.07.7-.07.07,0,.17.07.21.13.02.04-.04.16-.09.2-.38.26-.75.54-1.15.75-1.91,1.01-3.83,2-5.73,3.02-1.61.86-3.21,1.77-4.56,3.01-.54.49-1.06,1.06-1.42,1.69-.7,1.21-1.33,2.47-1.89,3.76-.61,1.38-.73,2.86-.63,4.35Z"/>
                      <path class="cls-279" d="M351.01,130.87c.95.55,1.87,1.07,2.82,1.62-.05.03-.12.11-.21.11-.3.02-.6.02-.89.01-.09,0-.17-.08-.27-.1-.19-.05-.39-.1-.62-.15-.06.52-.39.73-.81.73-.89-.01-1.7.31-2.55.53-1.08.27-2.16.19-3.21-.23-.16-.06-.3-.16-.45-.24-.04-.02-.09-.07-.14-.07-.34.05-.62-.1-.86-.3-.19-.15-.35-.16-.53,0-.06.06-.15.09-.22.13-.18-.37-.11-.75.21-.99.24-.18.31-.41.34-.67.06-.42.28-.65.71-.69.12-.01.24-.03.4-.04-.35-.67-.78-1.2-1.3-1.67-1.05-.96-2.34-1.46-3.68-1.86-1.57-.47-3.17-.74-4.79-.87-.64-.05-1.29-.1-1.93-.16,0-.03-.01-.05-.02-.08.19-.06.37-.17.56-.18.96-.03,1.91-.09,2.87-.04,1.04.06,2.08.2,3.11.35,2.66.38,5.16,1.2,7.44,2.64.36.23.71.46,1.09.7.71-.58,1.45-1.15,1.79-2.07.38-1,1.09-1.58,2.16-1.77,2.23-.4,4.48-.49,6.74-.38,1.12.05,2.24.08,3.35.19,1.49.15,2.96.4,4.37.91.2.07.38.2.57.3,0,.04-.02.08-.03.11-.11.02-.21.07-.32.07-.61-.01-1.23-.02-1.84-.07-.98-.07-1.96-.19-2.93-.26-.95-.07-1.91-.12-2.86-.16-1.76-.07-3.36.43-4.81,1.42-.63.43-1.28.85-1.86,1.34-.59.49-1.01,1.14-1.42,1.88Z"/>
                    </g>
                  </g>
                  <g id="NYC">
                    <g id="one-world-trade">
                      <path class="cls-283" d="M1215.75,203.64c0-48.4,0-96.79,0-145.19h16"/>
                      <path class="cls-284" d="M1250.25,244.15h-34.57v-25.83c10.93,0,21.87,0,32.8,0q1.76,0,1.76,1.83"/>
                      <path class="cls-277" d="M1249.06,215.49h-32.19l16.26-144.92c.1-.02-.1.02,0,0"/>
                      <path class="cls-283" d="M1234.1,58.52h16.15c0,48.34.07,96.84.07,145.12"/>
                      <path class="cls-270" d="M1231.38,34.81v-4.7c-.37-.21-.71-.4-1.04-.6.32-.21.63-.42,1.04-.69v-4.98c-.36-.2-.7-.38-1.03-.57.31-.22.61-.43,1.03-.73v-4.87c-.37-.28-.7-.53-1.03-.78.31-.16.63-.33,1.02-.54v-4.94c-.36-.27-.69-.51-1.02-.76.31-.17.62-.34.8-.44.56-3.24,1.32-7,1.87-10.22.13,0-.13,0,0,0,.55,3.17,1.3,6.88,1.88,10.19.14.1.49.33.83.57-.34.19-.67.38-1.05.58v4.98c.41.26.73.47,1.05.67-.33.19-.66.39-1.04.61v5c.39.23.71.43,1.04.63-.32.2-.65.4-1.04.65v5c.37.21.71.4,1.04.59-.32.21-.63.42-1.04.69v4.46c.88,1.2,1.57,1.99,2.11,2.88,2.5,4.07,4.98,8.14,7.4,12.25.42.72.61,1.64.69,2.49.11,1.2.03,2.42.03,3.7h-23.77c0-1.61-.17-3.21.06-4.75.15-.97.86-1.87,1.4-2.76M1231.37,36.03c-2.85,4.69-6.1,9.38-9.01,14.17h9.01v-7.5c-.42-.29-.72-.51-1.03-.73.34-.19.68-.37.99-.55M1234.71,36.04c-.12.06.12-.06,0,0v5.31c.38.25.7.46,1.02.67-.33.19-.67.38-.99.57v7.68h8.93"/>
                    </g>
                    <g id="empire-state">
                      <rect class="cls-273" x="1120.66" y="75.1" width="25.31" height="22.81"/>
                      <rect class="cls-273" x="1117.77" y="85.3" width="30.99" height="120.87"/>
                      <rect class="cls-273" x="1107.5" y="171.57" width="51.55" height="55.57"/>
                      <path class="cls-284" d="M1124.13,224.28h2.41v-52.63c.71-.08,1.33-.14,2.05-.22v-91.51h2.25v91.54h1.25v-91.52h2.35v91.52h1.25v-91.52h2.24v91.52c.73.05,1.31.09,2,.14v52.63h2.41v-27.17h20.13v27.25h12.91v16.83h-84.19v-16.75h12.82v-27.32h20.13v27.21Z"/>
                      <path class="cls-284" d="M1125.28,108.61v85.14h-17.79v-22.18h6.61c0-.61,0-1.11,0-1.61,0-19.91,0-39.83,0-59.74,0-1.64,0-1.62,1.6-1.61,3.15.01,6.3,0,9.58,0Z"/>
                      <path class="cls-284" d="M1152.43,171.53h6.61v22.24h-17.77v-85.09c.33-.02.63-.06.94-.07,3.15-.02,6.3-.06,9.46-.03.26,0,.6.4.74.69.12.26.03.63.03.95,0,19.91,0,39.83,0,59.74,0,.47,0,.94,0,1.57Z"/>
                      <path class="cls-284" d="M1132.58,48.46c0-4.15-.02-8.31.02-12.46,0-.62-.41-1.69.65-1.72,1.09-.02.68,1.06.69,1.67.06,3.76.06,7.51.08,11.27,0,.43,0,.87,0,1.36,1.33.05,1.55.83,1.68,1.92.63,5.01,1.35,10.01,2.07,15.01.31,2.12.35,2.12,2.47,2.12.51,0,1.02,0,1.57,0,.05.67.09,1.22.14,1.91,1.84-.46,2.01.65,1.8,2.1.75.04,1.37.07,2.11.1.03.35.08.69.08,1.04,0,3.28-.03,6.56.02,9.83.01.93-.26,1.32-1.2,1.29-1.15-.04-2.3,0-3.58,0v-6.6h-15.62c0,.75,0,1.55,0,2.35,0,.68.03,1.36.01,2.04-.05,2.4.48,2.21-2.39,2.2-.82,0-1.64-.15-2.52-.23v-11.89c.66-.03,1.31-.07,2.09-.11-.07-1.29-.15-2.63,1.82-2.07.05-.69.09-1.23.14-1.94,1,0,1.99-.03,2.97.01.66.03.94-.25,1.02-.87.57-4.34,1.14-8.68,1.71-13.01.17-1.3.25-2.63.56-3.89.14-.56.76-1.01,1.16-1.51.15.03.3.06.45.09Z"/>
                      <path class="cls-284" d="M1125.26,106.64h-7.49v-21.34h7.49v21.34Z"/>
                      <path class="cls-284" d="M1148.76,106.65h-7.48v-21.29h7.48v21.29Z"/>
                    </g>
                    <g id="statue-of-liberty">
                      <path class="cls-287" d="M1171.11,87.32c.85.77,1.71,1.52,2.54,2.31,3.01,2.86,6,5.74,9.03,8.58.31.29.89.41,1.34.41.7,0,.59-.64.63-1.1.27-2.84.53-5.69.79-8.53.23-2.5.45-4.99.69-7.63.14.2.26.3.28.4.38,3.36.75,6.72,1.11,10.07.22,2.01.4,4.02.68,6.02.05.33.49.74.84.86.28.1.8-.06,1.04-.28,3.22-3.14,6.42-6.32,9.62-9.48.26-.26.54-.5.81-.75.08.05.17.11.25.16-.18.37-.32.76-.55,1.1-2.46,3.73-4.93,7.45-7.4,11.17-.31.46-.65.95-.16,1.39.32.29.87.54,1.29.5,4.85-.37,9.7-.8,14.55-1.22.31-.03.62,0,1,.21-.32.12-.64.25-.96.35-4.61,1.36-9.22,2.7-13.82,4.09-.42.13-.96.47-1.09.84-.26.7.05,1.24.75,1.72,3.51,2.4,6.97,4.87,10.44,7.34.52.37.99.82,1.37,1.43-4.1-1.78-8.19-3.56-12.5-5.43.13,1.03.29,1.84.33,2.66.03.67.05,1.38-.14,2.01-.34,1.09-.29,1.95.45,2.91.85,1.09,1.42,2.4,2.18,3.57.24.37.67.78,1.07.85,1.57.29,2.64,1.25,3.19,2.61.58,1.43.96,2.97,1.19,4.5.28,1.92.16,3.94,1.31,5.63.46.68,1.02,1.35,1.69,1.81,1.84,1.28,3.61.75,4.54-1.28.35-.75.6-1.55.99-2.28.29-.54.74-.69,1.39-.33,2.62,1.46,5.27,2.86,7.9,4.29,1.03.56,1.15,1.41.29,2.25-.97.94-1.89,1.93-1.89,3.36,0,.67.35,1.34.52,2.02.08.32.29.73.18.96-1.05,2.1-2.25,4.11-4.06,5.66-.44.38-.96.73-1.51.89-.67.21-.76.64-.89,1.22-.53,2.55-1,5.13-1.72,7.63-.45,1.57-1.24,3.03-3.2,3.35-.97.16-1.67,1.46-1.56,2.47.4,3.78.83,7.55,1.19,11.33.09.96-.06,1.95-.04,2.92.01.62.1,1.24.2,1.85.27,1.66.22,3.26-.69,4.76-.17.28-.26.67-.23.98.18,1.53.58,2.96-.55,4.44-1.24,1.64-.61,3.67-.4,5.53.22,2,.47,3.95-.84,5.69-1.07,1.43-.53,3.03-.44,4.56.18,3.03.5,6.05.75,9.07.09,1.11.13,2.23.25,3.34.03.33.19.68.39.94.51.66,1.06,1.3,1.62,1.92.92,1.03,2.05,1.95,1.67,3.74,1.24,0,2.35.03,3.45-.01.79-.03,1.05.3,1.02,1.06-.04.98.01,1.96-.02,2.94-.02.59.22.81.8.8,1.36-.02,2.72.02,4.08-.02.7-.02,1.01.17.99.93-.04,1.89-.04,3.78,0,5.66.02.77-.3.98-1,.94-.59-.04-1.18,0-1.96,0,0,1.1.01,2.14,0,3.17-.01.77-.16,1.54-.1,2.3.09,1.18-.48,1.32-1.49,1.32-20.27-.03-40.54-.02-60.81-.02q-1.42,0-1.42-1.41c0-1.43-.03-2.87.01-4.3.02-.73-.23-1.01-.95-.99-1.1.04-2.21,0-3.37,0v-7.6c1.64,0,3.26,0,4.88,0q1.73,0,1.73-1.71c0-.84.03-1.68,0-2.52-.03-.74.28-.98.99-.96,1.31.04,2.63.01,4.05.01-.34-1.88.78-2.83,2.01-3.68,1.45-1,3.23-1.5,4.33-3.01.08-.11.22-.19.35-.22,2.09-.48,2.38-2.21,2.48-3.89.1-1.66-.04-3.34-.15-5.01-.13-1.93.18-3.78,1.1-5.47.74-1.36.82-2.7.3-4.12-.16-.46-.3-.95-.31-1.42-.1-3.56-.28-7.12-.22-10.68.07-4.01.4-8.01.55-12.02.09-2.5-.2-4.9-1.69-7.09-1.15-1.68-.75-3.67-.25-5.49.64-2.31,1.56-4.55,2.25-6.85.25-.84.24-1.78.29-2.67.01-.2-.17-.47-.34-.6-1.49-1.07-1.82-2.66-1.91-4.34-.14-2.47.41-4.84,1-7.22.37-1.5.6-3.06.66-4.6.06-1.44-.81-2.61-1.58-3.8-.55-.84-1.07-1.89-1.08-2.85-.03-1.79.32-3.59.5-5.38.05-.51.16-1.04.07-1.53-.25-1.41-.78-1.87-2.39-2.06.15-.39.22-.78.42-1.08.77-1.19.45-2.42-.37-3.51-.65-.86-.96-2.05-1.16-3.14-.57-3.09-.21-6.03,1.62-8.71.34-.5.38-1.27.39-1.91,0-1.08-.13-2.15-.22-3.23-.08-.95-.54-1.5-1.55-1.61-.58-.06-1.15-.32-1.68-.7h2.25c-.15-.88-.35-1.75-.43-2.63-.31-3.29-.63-6.59-.83-9.89-.11-1.83.01-3.68,0-5.52,0-.37-.02-.87-.25-1.08-1.73-1.61-1.5-3.64-1.31-5.67.05-.59.21-1.17.29-1.75.16-1.18-.87-3.15-1.91-3.68-1.96-1-2.07-1.5-1.54-3.68.28-1.15.8-2.03,1.7-2.64.66-.45,1.5-.63,2.36-.98-.16-.56-.45-1.26-.57-1.99-.43-2.58.71-4.46,2.75-5.9.37-.26.76-.5,1.17-.7,1.17-.58,2.22-1.24,1.94-2.84,1.78.6,3.16,3.11,2.96,5.23-.18,1.92-1.23,3.38-2.45,4.75-.38.43-.8.83-1.31,1.36.92.15,1.65.2,2.33.39,1.13.33,1.4.92,1.17,2.04-.07.34-.01.74.12,1.06.61,1.5.3,2.65-1.04,3.55-.46.31-.96.57-1.46.8-1.58.75-1.74,1.4-.81,2.94,1.09,1.8,2.07,3.66,1.95,5.87-.01.24.04.52-.06.73-1.25,2.55-.37,5.06.19,7.54.77,3.41,1.66,6.8,2.44,10.21.17.74.15,1.52.16,2.29.01.53.22.71.75.74,1.8.1,3.6.28,5.41.37.39.02,1-.14,1.12-.4.16-.34.06-.95-.16-1.28-2.92-4.24-5.89-8.46-8.84-12.68-.1-.14-.15-.3-.23-.46.05-.05.1-.1.15-.15ZM1179.03,105.95c-1.62-.44-3.2-.87-4.81-1.3.76,1.57,1.48,3.07,2.24,4.67.94-1.04,2.82-1.25,2.57-3.37ZM1177.31,113.82c.53-.69,1.03-1.34,1.53-1.98-.61,0-1,.18-1.41.35-.99.42-1.01.52-.12,1.63Z"/>
                      <path class="cls-287" d="M1170.59,87c-.04-.07-.08-.13-.02-.03-.01-.11,0-.03,0,.05,0,0,.01-.02.01-.02Z"/>
                      <path class="cls-287" d="M1170.79,87.23c-.07-.07-.13-.15-.2-.22,0,0-.01.02-.01.02.1.03.2.06.29.1-.03.04-.05.07-.08.11Z"/>
                      <path class="cls-287" d="M1170.97,87.47c-.06-.08-.12-.16-.18-.24.03-.03.06-.07.08-.11.08.07.16.13.24.2-.05.05-.1.1-.15.15Z"/>
                    </g>
                  </g>
                  <g id="midwest">
                    <g id="barn">
                      <path class="cls-281" d="M943.76,221.15h-8.62c0-.07,0-.15,0-.22,0-6.33,0-12.66,0-18.99v-.19h-20.55c0,.4,0,.79,0,1.19,0,3.25,0,6.5,0,9.75,0,2.45,0,4.9,0,7.35,0,.37,0,.75-.01,1.12h-8.45c0-.12,0-.23,0-.35,0-6.72,0-13.44,0-20.17.01-.03.02-.06.03-.09.25-.46.5-.91.75-1.37.31-.55.62-1.09.92-1.64,1.51-2.7,3.01-5.39,4.53-8.09.04-.08.11-.15.19-.2,1.03-.7,2.07-1.4,3.11-2.09,1.27-.85,2.54-1.71,3.81-2.56,1.76-1.19,3.52-2.37,5.28-3.56.11-.07.17-.07.28,0,1.6,1.09,3.21,2.17,4.82,3.25,2.46,1.65,4.91,3.31,7.37,4.96.07.04.13.11.17.18,2.11,3.77,4.22,7.54,6.33,11.31.02.04.04.09.06.14,0,.06-.01.12-.01.18,0,6.63,0,13.27,0,19.9,0,.07,0,.13.01.2ZM920.92,187.07v7.83h8.12v-7.83h-8.12Z"/>
                      <path class="cls-289" d="M914.57,221.15c0-.37.01-.75.01-1.12,0-2.45,0-4.9,0-7.35,0-3.25,0-6.5,0-9.75,0-.39,0-.78,0-1.19h20.55v.19c0,6.33,0,12.66,0,18.99,0,.07,0,.15,0,.22h-10.27v-.83s-.02,0-.03,0v.83h-10.27ZM916.78,212.44s-.02.04-.02.05c.98,1.01,1.97,2.02,2.96,3.04.15-.17.29-.32.44-.47.83-.85,1.67-1.7,2.5-2.55.02-.02.05-.05.08-.05.25,0,.5,0,.76,0,0,.27,0,.52,0,.76,0,.04-.03.08-.06.11-.86.88-1.72,1.76-2.58,2.64-.12.12-.24.25-.4.42.39.37.79.72,1.16,1.1.6.6,1.18,1.21,1.77,1.81.08.08.11.15.11.26,0,.21,0,.43,0,.65,0,0,.01,0,.02,0v-7.74h1.32v7.71s.02,0,.03,0v-7.73c.08,0,.14,0,.2,0,.59,0,1.18,0,1.78,0,.12,0,.2.03.28.12.89.92,1.79,1.85,2.69,2.77.06.06.11.13.18.21,1.02-1.04,2-2.06,2.99-3.07,0-.01-.02-.03-.02-.04-.05,0-.11,0-.16,0-1.28,0-2.56,0-3.84,0-.66,0-1.32,0-1.98,0-.64,0-1.29,0-1.93,0-.14,0-.19-.05-.18-.18,0-.18,0-.37,0-.55q0-.23.23-.23c3.25,0,6.5,0,9.75,0,.07,0,.15,0,.22,0,0,0,0-.02,0-.02h-10.19c0-.27,0-.53,0-.79,0-.14.05-.17.17-.17.73,0,1.45.01,2.18.01,1.87,0,3.75,0,5.62,0,.04,0,.08,0,.15-.02-.06-.06-.09-.1-.13-.14-.27-.28-.55-.56-.82-.84-.64-.66-1.28-1.31-1.92-1.97-.07-.07-.13-.12-.22-.02-.93.96-1.85,1.91-2.79,2.86-.06.06-.15.11-.22.11-.63,0-1.25,0-1.88,0-.04,0-.09,0-.14-.01v-7.72h-.04v7.72h-1.32v-7.77h-6.73l-.02.04c.98,1.01,1.96,2.02,2.95,3.04.06-.07.1-.12.15-.17.9-.92,1.8-1.85,2.71-2.77.06-.06.14-.13.21-.14.2-.02.4,0,.6,0,.04,0,.1.04.1.07,0,.23,0,.47,0,.7,0,.04-.04.07-.07.1-.92.94-1.83,1.88-2.75,2.82-.18.18-.18.18,0,.36.92.94,1.85,1.89,2.77,2.83.03.03.06.07.06.11,0,.25,0,.5,0,.77-.23,0-.45,0-.67,0-.07,0-.16-.04-.21-.09-.93-.95-1.86-1.9-2.79-2.86-.04-.04-.08-.07-.12-.12-.99,1.02-1.97,2.02-2.95,3.03.01.02.02.03.03.05h8.04v.95h-10.18s0,.01,0,.02h.18c2.49,0,4.98,0,7.46,0,.79,0,1.58,0,2.37,0,.13,0,.19.03.18.18-.01.2-.01.39,0,.59,0,.15-.04.19-.19.19-.7,0-1.41,0-2.11,0-1.86,0-3.72,0-5.59,0-.06,0-.12,0-.18.01ZM915.97,213.3s-.02.02-.04.03v6.9h6.77c-1.01-1.04-2-2.05-3.01-3.09-.06.08-.1.14-.16.2-.92.94-1.83,1.88-2.75,2.82-.03.03-.07.07-.11.07-.24,0-.49,0-.75,0,0-.27,0-.52,0-.77,0-.03.03-.07.05-.1.11-.12.21-.23.32-.34.75-.77,1.5-1.53,2.25-2.3.12-.12.23-.25.36-.39-.99-1.01-1.97-2.02-2.95-3.03ZM915.92,209.64c.05-.03.09-.04.11-.06.77-.79,1.55-1.58,2.32-2.37.16-.16.3-.33.46-.48.08-.08.08-.15,0-.23-.1-.09-.18-.2-.27-.29-.84-.86-1.68-1.73-2.52-2.59-.04-.05-.08-.12-.08-.18,0-.23,0-.46,0-.69,0,0,0,0,0,0v6.9ZM932.99,202.72h-5.92s-.01.03-.02.04c.98,1.01,1.96,2.01,2.94,3.03,1-1.03,1.99-2.04,2.99-3.07ZM929.21,206.6c-1-1.02-1.97-2.02-2.94-3.02l-.04.04v5.97s.03.02.05.03c.97-1,1.95-2,2.94-3.01ZM929.21,216.34c-.98-1.01-1.96-2.01-2.94-3.02-.01,0-.03.02-.04.03v5.97s.03.02.05.03c.98-1,1.95-2,2.94-3.01ZM933.75,209.63s.02-.02.04-.03v-6.07c-1.01,1.04-1.99,2.05-2.99,3.07.99,1.02,1.97,2.02,2.95,3.03ZM933.78,213.34s-.02-.02-.04-.03c-.98,1.01-1.96,2.01-2.95,3.03.99,1.02,1.97,2.02,2.95,3.02.01,0,.02-.02.04-.02v-6.01ZM930,217.16c-.99,1.02-1.96,2.03-2.94,3.03,0,.01.02.03.03.04h5.9c-1.01-1.03-1.99-2.04-2.99-3.07Z"/>
                      <path class="cls-289" d="M903.5,202.3s.08-.05.1-.08c.75-1.33,1.49-2.67,2.24-4,1.82-3.25,3.64-6.51,5.46-9.76.05-.08.13-.16.21-.21,2.55-1.72,5.09-3.43,7.64-5.14,1.8-1.21,3.6-2.43,5.4-3.64.04-.03.06-.08.09-.12.17,0,.34,0,.5,0,.03.04.04.09.08.11.72.49,1.43.97,2.15,1.45,1,.67,1.99,1.34,2.99,2.01,2.62,1.77,5.24,3.54,7.86,5.31.11.07.2.18.26.29,2.56,4.57,5.11,9.14,7.67,13.71.04.07.1.13.16.2v.17c-.4.22-.8.43-1.21.65-.28-.51-.56-1-.84-1.5-.17-.3-.34-.59-.51-.88-.02-.05-.03-.09-.06-.14-2.11-3.77-4.21-7.54-6.33-11.31-.04-.07-.1-.13-.17-.18-2.46-1.66-4.91-3.31-7.37-4.96-1.61-1.08-3.21-2.17-4.82-3.25-.1-.07-.17-.07-.28,0-1.76,1.19-3.52,2.37-5.28,3.56-1.27.85-2.54,1.71-3.81,2.56-1.04.7-2.07,1.39-3.11,2.09-.07.05-.14.12-.19.2-1.51,2.69-3.02,5.39-4.53,8.09-.31.55-.62,1.09-.92,1.64-.25.45-.5.91-.75,1.37-.02.03-.02.06-.03.09-.02.04-.05.07-.07.11-.45.8-.89,1.59-1.34,2.39-.02.04-.05.08-.08.12-.34-.19-.67-.38-1.01-.56-.04-.02-.08-.02-.12-.03,0-.12,0-.25,0-.37Z"/>
                      <path class="cls-281" d="M924.84,221.15v-.83s.02,0,.03,0v.83h-.03Z"/>
                      <path class="cls-289" d="M920.92,187.07h8.12v7.83h-8.12v-7.83ZM927.98,194.13h0c-.16,0-.32,0-.48-.01-.08,0-.17-.04-.22-.1-.72-.75-1.44-1.5-2.16-2.25-.04-.04-.06-.11-.08-.17-.07.06-.08.06-.09.07-.74.78-1.48,1.56-2.23,2.34-.06.06-.16.1-.24.1-.49,0-.98,0-1.47,0,0,0,0,0,0,0h6.98ZM927.36,187.85h-4.69s-.01.03-.02.04c.77.81,1.55,1.61,2.33,2.43.79-.82,1.57-1.64,2.38-2.47ZM921.98,188.53v4.91c.07-.06.11-.09.15-.13.69-.72,1.39-1.44,2.08-2.16.16-.16.15-.16,0-.33-.61-.64-1.22-1.28-1.83-1.91-.12-.13-.25-.24-.39-.37ZM927.98,188.52c-.81.85-1.59,1.66-2.37,2.47.78.81,1.56,1.62,2.37,2.46v-4.93Z"/>
                      <path class="cls-281" d="M916.78,212.44c.06,0,.12-.01.18-.01,1.86,0,3.72,0,5.59,0,.7,0,1.41,0,2.11,0,.15,0,.2-.04.19-.19-.01-.2-.01-.39,0-.59,0-.14-.05-.18-.18-.18-.79,0-1.58,0-2.37,0-2.49,0-4.98,0-7.46,0h-.18s0-.01,0-.02h10.18v-.95h-8.04s-.02-.03-.03-.05c.98-1.01,1.96-2.01,2.95-3.03.05.04.09.08.12.12.93.95,1.86,1.91,2.79,2.86.05.05.14.09.21.09.22.01.43,0,.67,0,0-.27,0-.52,0-.77,0-.04-.03-.08-.06-.11-.92-.94-1.84-1.89-2.77-2.83-.17-.18-.17-.18,0-.36.92-.94,1.83-1.88,2.75-2.82.03-.03.07-.07.07-.1,0-.23,0-.47,0-.7,0-.03-.07-.07-.1-.07-.2,0-.4-.02-.6,0-.08,0-.16.08-.21.14-.9.92-1.81,1.85-2.71,2.77-.05.05-.09.1-.15.17-.99-1.02-1.97-2.03-2.95-3.04l.02-.04h6.73v7.77h1.32v-7.72h.04v7.72c.06,0,.1.01.14.01.63,0,1.25,0,1.88,0,.08,0,.17-.05.22-.11.93-.95,1.86-1.9,2.79-2.86.09-.09.15-.05.22.02.64.66,1.28,1.32,1.92,1.97.27.28.55.56.82.84.04.04.07.08.13.14-.07,0-.11.02-.15.02-1.87,0-3.75,0-5.62,0-.73,0-1.45,0-2.18-.01-.13,0-.18.03-.17.17.01.26,0,.51,0,.79h10.19s0,.02,0,.02c-.07,0-.15,0-.22,0-3.25,0-6.5,0-9.75,0q-.23,0-.23.23c0,.18,0,.37,0,.55,0,.14.04.18.18.18.64,0,1.29,0,1.93,0,.66,0,1.32,0,1.98,0,1.28,0,2.56,0,3.84,0,.05,0,.11,0,.16,0,0,.01.02.03.02.04-.99,1.01-1.97,2.03-2.99,3.07-.06-.07-.12-.15-.18-.21-.9-.92-1.79-1.84-2.69-2.77-.08-.08-.16-.12-.28-.12-.59,0-1.18,0-1.78,0-.06,0-.12,0-.2,0v7.73s-.02,0-.03,0v-7.71h-1.32v7.74s-.01,0-.02,0c0-.22,0-.43,0-.65,0-.11-.03-.18-.11-.26-.59-.6-1.18-1.21-1.77-1.81-.37-.37-.77-.73-1.16-1.1.17-.17.28-.3.4-.42.86-.88,1.72-1.76,2.58-2.64.03-.03.05-.07.06-.11,0-.25,0-.49,0-.76-.26,0-.51,0-.76,0-.03,0-.06.03-.08.05-.83.85-1.67,1.7-2.5,2.55-.15.15-.29.31-.44.47-.99-1.02-1.97-2.03-2.96-3.04,0-.02.02-.04.02-.05Z"/>
                      <path class="cls-281" d="M915.97,213.3c.98,1.01,1.96,2.01,2.95,3.03-.13.14-.24.26-.36.39-.75.77-1.5,1.53-2.25,2.3-.11.11-.22.23-.32.34-.02.03-.05.06-.05.1,0,.25,0,.5,0,.77.26,0,.51,0,.75,0,.04,0,.08-.04.11-.07.92-.94,1.84-1.88,2.75-2.82.05-.06.1-.12.16-.2,1.01,1.04,1.99,2.05,3.01,3.09h-6.77v-6.9s.02-.02.04-.03Z"/>
                      <path class="cls-281" d="M915.92,209.64v-6.9s0,0,0,0c0,.23,0,.46,0,.69,0,.06.04.14.08.18.84.87,1.68,1.73,2.52,2.59.09.1.18.2.27.29.08.08.08.14,0,.23-.16.16-.31.32-.46.48-.77.79-1.55,1.58-2.32,2.37-.02.02-.05.03-.11.06Z"/>
                      <path class="cls-281" d="M932.99,202.72c-1,1.03-1.99,2.04-2.99,3.07-.99-1.02-1.97-2.02-2.94-3.03,0-.01.01-.03.02-.04h5.92Z"/>
                      <path class="cls-281" d="M929.21,206.6c-.99,1.01-1.96,2.01-2.94,3.01-.02,0-.03-.02-.05-.03v-5.97l.04-.04c.97,1,1.95,2,2.94,3.02Z"/>
                      <path class="cls-281" d="M929.21,216.34c-.98,1.01-1.96,2.01-2.94,3.01-.02-.01-.03-.02-.05-.03v-5.97s.03-.02.04-.03c.98,1,1.96,2.01,2.94,3.02Z"/>
                      <path class="cls-281" d="M933.75,209.63c-.98-1.01-1.96-2.01-2.95-3.03,1-1.02,1.98-2.03,2.99-3.07v6.07s-.02.02-.04.03Z"/>
                      <path class="cls-281" d="M933.78,213.34v6.01s-.02.02-.04.02c-.98-1-1.96-2.01-2.95-3.02.99-1.02,1.97-2.02,2.95-3.03.01,0,.02.02.04.03Z"/>
                      <path class="cls-281" d="M930,217.16c1,1.03,1.98,2.04,2.99,3.07h-5.9s-.02-.03-.03-.04c.98-1.01,1.95-2.01,2.94-3.03Z"/>
                      <path class="cls-281" d="M927.98,194.13h-6.98s0,0,0,0c.49,0,.98,0,1.47,0,.08,0,.19-.04.24-.1.75-.78,1.49-1.56,2.23-2.34,0,0,.02,0,.09-.07.03.06.04.12.08.17.72.75,1.43,1.5,2.16,2.25.05.05.15.09.22.1.16.01.32,0,.48,0h0Z"/>
                      <path class="cls-281" d="M927.36,187.85c-.8.84-1.59,1.65-2.38,2.47-.79-.82-1.56-1.63-2.33-2.43,0-.01.01-.03.02-.04h4.69Z"/>
                      <path class="cls-281" d="M921.98,188.53c.14.13.27.25.39.37.61.64,1.22,1.27,1.83,1.91.16.17.16.17,0,.33-.69.72-1.38,1.44-2.08,2.16-.04.04-.08.07-.15.13v-4.91Z"/>
                      <path class="cls-281" d="M927.98,188.52v4.93c-.8-.84-1.58-1.65-2.37-2.46.77-.81,1.55-1.62,2.37-2.47Z"/>
                    </g>
                    <g id="blades">
                      <path class="cls-279" d="M975.01,178.96c-.29-.13-.49-.44-.82-.76-.44.16-.99.32-1.49.56-1.62.78-3.33,1.16-5.13,1.31-3.51.31-7.01.7-10.51,1.06-2.67.27-5.34.55-8.01.82-.23.02-.45,0-.74,0,.09-.45.45-.41.7-.48,3.05-.79,6.11-1.56,9.16-2.34,5.26-1.34,10.52-2.68,15.78-4.03.25-.07.51-.15.74-.27.67-.34,1.33-.71,2.18-1.16.14-.93.29-2.09.49-3.23.1-.55.22-1.12.45-1.63,2.74-6.19,5.51-12.37,8.27-18.56.11-.25.28-.48.42-.72.07.02.14.05.21.07-.04.24-.05.48-.11.71-1.64,5.84-3.29,11.67-4.93,17.51-.68,2.42-1.37,4.83-2.03,7.26-.11.4-.05.85-.09,1.27-.05.63-.12,1.25-.19,2.03.41.33.93.75,1.45,1.14,1.04.79,2.01,1.63,2.79,2.72,3.81,5.32,7.67,10.6,11.5,15.9.15.21.27.44.44.72-.46.15-.61-.18-.79-.37-2.63-2.68-5.26-5.37-7.88-8.06-2.72-2.79-5.43-5.58-8.15-8.36-.18-.19-.38-.36-.55-.51"/>
                      <path class="cls-279" d="M1023.67,163.72c-.42-.19-.73-.65-1.22-1.11-.65.24-1.46.47-2.2.83-2.4,1.15-4.92,1.71-7.56,1.94-5.18.46-10.34,1.03-15.51,1.56-3.94.4-7.88.81-11.82,1.21-.33.03-.67,0-1.09,0,.14-.67.66-.61,1.03-.7,4.5-1.16,9.01-2.31,13.51-3.45,7.76-1.98,15.52-3.96,23.28-5.94.38-.1.75-.23,1.1-.4.99-.51,1.97-1.05,3.21-1.71.21-1.38.43-3.08.73-4.77.14-.82.33-1.66.66-2.41,4.05-9.14,8.12-18.26,12.2-27.38.17-.37.41-.71.62-1.07.1.04.21.07.31.11-.05.35-.07.7-.17,1.04-2.42,8.61-4.85,17.23-7.28,25.84-1.01,3.57-2.02,7.13-2.99,10.71-.16.59-.08,1.25-.13,1.88-.08.93-.17,1.85-.29,3,.61.48,1.37,1.1,2.15,1.69,1.54,1.17,2.97,2.41,4.12,4.01,5.62,7.84,11.31,15.64,16.97,23.46.22.31.4.65.65,1.06-.68.22-.9-.27-1.16-.54-3.88-3.96-7.76-7.93-11.63-11.9-4.01-4.11-8.02-8.23-12.03-12.34-.27-.28-.57-.53-.81-.76"/>
                      <path class="cls-279" d="M1070.51,182.78c-.28-.13-.48-.43-.81-.74-.44.16-.97.31-1.46.55-1.6.77-3.28,1.14-5.04,1.29-3.45.3-6.89.69-10.33,1.04-2.62.27-5.25.54-7.87.81-.22.02-.45,0-.73,0,.09-.45.44-.41.69-.47,3-.77,6-1.54,9-2.3,5.17-1.32,10.34-2.64,15.51-3.96.25-.06.5-.15.73-.27.66-.34,1.31-.7,2.14-1.14.14-.92.29-2.05.48-3.18.1-.54.22-1.1.44-1.61,2.7-6.08,5.41-12.16,8.13-18.24.11-.25.27-.47.41-.71.07.02.14.05.21.07-.04.23-.05.47-.11.69-1.61,5.74-3.23,11.47-4.85,17.21-.67,2.38-1.35,4.75-1.99,7.13-.11.4-.05.83-.09,1.25-.05.62-.12,1.23-.19,2,.41.32.91.73,1.43,1.12,1.03.78,1.98,1.6,2.74,2.67,3.74,5.22,7.53,10.42,11.3,15.62.15.2.27.43.43.7-.45.14-.6-.18-.78-.36-2.59-2.64-5.17-5.28-7.75-7.92-2.67-2.74-5.34-5.48-8.01-8.22-.18-.18-.38-.35-.54-.5"/>
                    </g>
                    <g id="turbines">
                      <path class="cls-279" d="M977.96,175.31c0,1.24-.01,8.84.03,10.08.54,16.63,1.05,32.43,1.57,48.49h-5.64c.16-4.9.32-9.79.48-14.69.19-6.04.37-12.07.57-18.11.23-6.87.46-17.77.71-24.64"/>
                      <path class="cls-279" d="M1028.04,158.33c.01,1.83-.02,13.04.04,14.87.79,24.53,1.55,47.84,2.32,71.54h-8.32c.24-7.22.47-14.45.7-21.67.28-8.91.55-17.81.84-26.72.33-10.14.68-26.22,1.05-36.36"/>
                      <path class="cls-279" d="M1073.42,179.19c0,1.22-.01,8.69.03,9.9.53,16.34,1.03,31.87,1.55,47.65h-5.54c.16-4.81.32-9.62.47-14.43.19-5.93.37-11.86.56-17.8.22-6.75.45-17.46.7-24.21"/>
                    </g>
                    <g id="windmill">
                      <path class="cls-278" d="M898.15,228.2c-.89.37-1.31.14-1.76-.51-3.26-4.71-6.58-9.39-9.88-14.08-.16-.23-.35-.45-.61-.78-1.08,1.55-2.13,3.04-3.17,4.53-2.4,3.43-4.81,6.84-7.17,10.3-.43.63-.82.92-1.75.52,2.9-23.07,5.8-46.19,8.71-69.43-.52-.06-1-.11-1.56-.17v-1.55c.57-.04,1.13-.07,1.66-.11.06-.1.12-.16.13-.22.36-3.17,1.09-2.62-2.51-3.59-.62-.17-1.27-.21-2.06-.34.91-2.36,1.79-4.65,2.69-6.98-.67-.39-1.28-.75-2.01-1.17-1.53,1.95-3.05,3.88-4.37,5.55-1.32-1.41-2.59-2.77-3.9-4.16,1.46-1.18,3.38-2.73,5.32-4.3-.4-.68-.75-1.29-1.18-2.01-2.3.92-4.58,1.83-6.82,2.73-.51-1.89-1-3.68-1.52-5.58,2.36-.37,4.79-.76,7.22-1.14v-2.33c-2.43-.35-4.84-.7-7.25-1.05.49-1.89.97-3.71,1.46-5.61,2.22.86,4.5,1.75,6.84,2.66.39-.68.77-1.32,1.17-2.02-1.95-1.54-3.87-3.05-5.51-4.35,1.37-1.31,2.73-2.62,4.11-3.95,1.18,1.47,2.73,3.4,4.31,5.36.65-.38,1.27-.74,2-1.18-.91-2.29-1.82-4.59-2.72-6.84,1.88-.51,3.69-1.01,5.58-1.53.37,2.36.75,4.77,1.13,7.22h2.33c.35-2.41.71-4.85,1.06-7.25,1.88.5,3.67.97,5.58,1.47-.86,2.24-1.74,4.54-2.63,6.86.71.4,1.33.75,2.03,1.14,1.53-1.95,3.04-3.87,4.32-5.5,1.35,1.37,2.67,2.71,4,4.08-1.54,1.24-3.45,2.77-5.39,4.33.38.67.73,1.29,1.15,2.03,2.29-.91,4.58-1.82,6.83-2.73.51,1.87,1,3.67,1.53,5.58-1.5.24-3.08.49-4.65.74-.6.09-1.21.2-1.82.26-.71.07-.97.37-.64,1.12h9.81c.04-.15.1-.28.11-.41q.11-2.16,2.17-2.65c4.52-1.06,9.04-2.11,13.56-3.16.27-.06.55-.1.98-.17-.85,4.42-.88,8.74.03,13.24-5.64-1.32-11.15-2.62-16.74-3.93v-2.5h-9.93c-.31.7-.12.98.68,1.08,2.17.27,4.32.61,6.46.93-.5,1.89-.97,3.68-1.47,5.6-2.21-.86-4.48-1.73-6.83-2.64-.38.66-.75,1.3-1.18,2.02,1.95,1.53,3.87,3.04,5.52,4.34-1.36,1.32-2.71,2.63-4.1,3.97-1.2-1.5-2.73-3.4-4.31-5.37-.66.38-1.3.75-2.02,1.17.92,2.32,1.84,4.61,2.73,6.84-1.49.4-2.87.79-4.26,1.14-.72.18-.84.59-.73,1.28.28,1.76.25,1.76,2.04,2.11v1.49c-.51.04-.96.07-1.55.11,2.91,23.2,5.82,46.33,8.72,69.47ZM882.86,140.72c-.18.06-.36.12-.54.18v-.7c-1.08,1.39-2.05,2.64-3.01,3.87.7,1.07.91-.04,1.32-.17,0,.46-.7,1.22.56,1.19.55-1.45,1.1-2.91,1.64-4.38,0,0-.02-.02-.03-.03l.07.04ZM891.19,125.3c-.13-.48,1.08-1.26-.38-1.47-.54,1.4-1.09,2.8-1.61,4.21-.02.04.19.17.3.25.14.04.38.15.42.1.84-1.03,1.68-2.06,2.45-3.14.12-.17-.08-.58-.17-1.08-.5.56-.75.84-1,1.13ZM889.26,140.67s0-.07-.02-.09c0-.01-.05,0-.07,0,.04.03.07.05.11.08.54,1.5,1.08,2.99,1.61,4.49.16,0,.31-.01.47-.02.05-.3.21-.65.11-.89-.33-.78-.76-1.52-1.15-2.28.6.86,1.2,1.73,1.82,2.63.23-.2.41-.36.64-.56-1.02-1.27-2.01-2.5-3.11-3.88.02.42.03.59.04.76-.15-.07-.3-.15-.45-.22ZM883.23,139.34c.12.26.19.67.38.75,1.77.72,3.52.69,5.29-.3-.49-.85-.93-1.62-1.38-2.38-.1-.18-.32-.47-.4-.45-1.02.33-2.39-.52-3.08.9.14-.39.28-.79.41-1.18-.75-2.48-2.56-2.29-4.54-1.92.07,1.97.92,3.44,2.39,4.56.2.15.61.01.92.01ZM887.78,131.32c-.74,1.31.95,1.86.83,2.96h3.47c-.16-2.19-1.1-3.8-2.84-4.96-.26.22-.45.37-.63.53.05-.26.1-.53.15-.77-2.07-1.03-4.34-.94-5.63.23.53.91,1.07,1.83,1.59,2.72.56-.05,1.05-.22,1.46-.11.73.19,1.2-.03,1.6-.6ZM893.45,202.03c-2.51,3.58-4.83,6.89-7.18,10.26,3.36,4.77,6.7,9.52,10.05,14.27.07-.04.13-.07.2-.11-1.01-8.02-2.01-16.05-3.06-24.42ZM875.44,226.44c.07.03.13.07.2.1,3.31-4.73,6.62-9.47,9.95-14.23-2.33-3.31-4.63-6.57-7.11-10.08-1.04,8.3-2.04,16.26-3.04,24.21ZM885.96,186.69c-2.38,4.84-4.64,9.44-6.94,14.13h13.91c-2.32-4.71-4.59-9.31-6.97-14.13ZM885.93,211.81c2.36-3.38,4.64-6.64,6.98-9.99h-14.01c2.37,3.37,4.65,6.6,7.03,9.99ZM890.44,178.09l-.24-.03c-1.17,2.38-2.32,4.77-3.53,7.13-.31.61-.31,1.09-.01,1.7,2,3.99,3.96,8.01,5.93,12.01.11.23.27.43.57.88-.93-7.44-1.83-14.56-2.73-21.69ZM881.71,178.11c-.07.02-.14.03-.21.05-.89,7.06-1.77,14.11-2.66,21.17.38-.26.56-.57.71-.88,1.7-3.46,3.32-6.96,5.14-10.35.78-1.45.85-2.61.01-4.05-1.12-1.91-2-3.95-2.99-5.93ZM885.97,166.47c-1.39,3.47-2.67,6.64-3.97,9.88h7.81c-1.28-3.29-2.51-6.45-3.85-9.88ZM885.96,185.41c1.36-2.77,2.64-5.37,3.95-8.05h-7.93c1.33,2.7,2.61,5.28,3.97,8.05ZM884.18,156.88h3.59c-.08-.71-.16-1.31-.23-1.92-.3-2.43-.58-4.85-.92-7.27-.04-.3-.39-.56-.59-.84-.22.17-.6.32-.62.51-.43,3.13-.81,6.27-1.22,9.51ZM889.8,174.72h.22c-.56-4.49-1.12-8.97-1.69-13.45-.82,1.42-1.42,2.9-1.98,4.39-.06.16.07.41.15.61,1.1,2.82,2.2,5.63,3.3,8.45ZM881.98,174.37c.06.01.12.02.18.03,1.13-2.8,2.27-5.59,3.39-8.39.05-.13.08-.3.04-.42-.57-1.52-1.16-3.04-1.74-4.55-.07.02-.14.04-.21.06-.56,4.43-1.11,8.85-1.67,13.28ZM889.18,139.69c1.82-1.26,2.76-2.86,2.88-5.04h-3.26c-.39.65-.77,1.21-1.08,1.81-.09.18-.12.48-.03.65.45.84.95,1.66,1.49,2.58ZM884.43,132.09c-.48-.81-1.05-1.78-1.62-2.75-1.95,1.19-3.03,3.2-2.73,5.03.91,0,1.84.03,2.77-.02.21-.01.46-.25.59-.45.34-.54.62-1.11,1.01-1.81ZM885.99,164.96c.7-1.75,1.28-3.2,1.89-4.74h-3.71c.59,1.54,1.15,2.99,1.82,4.74ZM876.37,141.36c1.27-1.02,2.48-1.98,3.67-2.95.13-.11.15-.35.22-.52-.18-.07-.4-.24-.53-.19-1.46.56-2.9,1.16-4.45,1.79.4.68.72,1.24,1.09,1.87ZM875.22,129.58c1.53.6,2.92,1.17,4.33,1.69.17.06.42-.09.64-.14-.1-.21-.14-.49-.3-.62-1.14-.93-2.31-1.82-3.58-2.82-.37.63-.69,1.2-1.08,1.88ZM895.58,127.6c-1.28,1.03-2.44,1.93-3.57,2.87-.16.13-.21.39-.31.6.21.05.45.21.61.15,1.43-.54,2.84-1.12,4.37-1.74-.39-.67-.71-1.21-1.1-1.88ZM885.62,127.82c.17.02.33.03.5.05.57-1.62.57-3.35.85-5.1h-2.13c.27,1.75.53,3.4.79,5.05ZM896.74,139.39c-1.55-.61-2.97-1.19-4.4-1.73-.15-.06-.38.08-.57.12.05.18.04.44.16.54,1.21.97,2.44,1.92,3.73,2.93.38-.66.68-1.18,1.08-1.86ZM893.01,134.05c0,.08,0,.17,0,.25,1.39,0,2.78.03,4.16-.03.22,0,.41-.43.62-.65-.08-.08-.16-.17-.24-.25-1.51.23-3.03.46-4.54.69ZM874.4,135.61c1.53-.24,3.06-.48,4.6-.72-1.41-.22-2.77-.22-4.14-.22-.69,0-.82.31-.46.94ZM880.17,124.28c.83,1.41,1.62,2.76,2.42,4.12.07-.04.14-.07.21-.11-.6-1.49-1.2-2.97-1.82-4.52-.31.19-.54.34-.81.51ZM879.05,134.34c0-.06.01-.12.02-.18-1.44-.21-2.88-.45-4.33-.6-.18-.02-.4.39-.77.78h5.08ZM882.15,128.66c.06-.04.13-.08.19-.12-.8-1.37-1.6-2.75-2.43-4.18-.3.22-.51.39-.75.57,1.03,1.28,2.01,2.51,2.99,3.74ZM892.97,134.6c0,.07,0,.14,0,.2,1.37.21,2.74.42,4.11.62.74.11.73-.28.54-.83h-4.64ZM887.98,159.22c-.86-.82-3.68-.7-4.06,0h4.06ZM886.06,143.43c-.07,0-.14,0-.21,0-.1.92-.2,1.83-.3,2.75l.31.2c.18-.21.52-.43.51-.63-.04-.78-.2-1.55-.31-2.32Z"/>
                      <path class="cls-278" d="M887.74,131.37c.3-.52.6-1.04.9-1.56-.3.52-.6,1.04-.9,1.56Z"/>
                      <path class="cls-278" d="M884.09,137.82c-.3.52-.6,1.04-.9,1.56.3-.52.6-1.04.9-1.56Z"/>
                      <path class="cls-278" d="M881.5,142.37c-.3.52-.6,1.04-.9,1.56.3-.52.6-1.04.9-1.56Z"/>
                      <path class="cls-278" d="M882.36,140.85c-.23.38-.46.75-.68,1.13.23-.38.46-.75.68-1.13Z"/>
                      <path class="cls-278" d="M881.71,141.94c-.08.16-.16.32-.24.48.08-.16.16-.32.24-.48Z"/>
                      <path class="cls-278" d="M889.68,140.86c.23.38.46.75.68,1.13-.23-.38-.46-.75-.68-1.13Z"/>
                      <path class="cls-278" d="M891.23,125.26c-.59,1.03-1.17,2.05-1.76,3.08.59-1.03,1.17-2.05,1.76-3.08Z"/>
                    </g>
                  </g>
                  <g id="rocky-mountains">
                    <g>
                      <path class="cls-285" d="M492.38,225.51c3.66-3.67,7.27-7.46,10.96-11.09,10.35-10.18,20.89-19.96,31.05-30.56,8.03-8.38,15.69-17.61,23.37-26.74,4.71-5.6,9.47-10.6,15.56-12.31,2.67-.75,5.34-2.61,7.69-4.76,5.13-4.69,10.15-9.7,15.05-14.92,3.52-3.74,6.83-4.86,10.54-.75,2.19,2.42,4.53,4.55,6.84,6.72,1.67,1.57,3.46,1.75,5.17.24,5-4.4,10.03-8.76,14.93-13.39,4.8-4.53,9.49-9.31,14.17-14.1,2.62-2.68,5.15-3.38,7.93-.56,7.06,7.17,14.18,14.18,21.21,21.4,5.08,5.22,10.61,8.44,16.5,11.09,6.34,2.84,10.85-1.43,15.63-5.95.12-.11.21-.27.33-.4,6.51-7.2,6.41-6.12,12.39-.25,3.14,3.09,6.55,5.59,9.92,8.07.57.42,1.89-.29,2.4-1.12,7.17-11.74,15.38-21.43,24.44-29.58,1.87-1.68,3.72-2.14,5.51-.38,5.02,4.95,10.07,9.86,14.88,15.23,4.44,4.95,8.59,10.48,13.75,13.75,1.15.73,2.31,1.7,3.52,1.97,6.22,1.35,11.31,6.41,16.45,11.28,14.01,13.26,27.08,28.37,38.81,46.04,6.81,10.26,25.92,34.76,26.46,35.47-271.94-20.26-221.34-2.76-392.23,3.05-.05-.23,4.49-5.15,6.78-7.45ZM590.78,190.47c5.6-2.65,10.48-6.95,13.8-14.51,3.95-8.97,9.67-13.03,16.46-15.22,6.24-2.01,12.37-4.98,18.44-8.03,3.2-1.6,6-4.6,7.52-9.51.86-2.77,2.28-3.93,4.19-3.76,2.02.18,4.04.41,6.03.87,3.44.79,6.86,1.86,10.31,2.62,1.3.29,2.63.88,3.83-1.23.81-1.42,2.19-2.62,3.41-2.87,1.97-.4,4.04-.12,6.04.21,3.43.57,6.83,1.4,10.25,2.12-.69-1.48-1.51-2.59-2.44-3.38-7.11-6.04-14.23-12.07-21.37-18.02-4.74-3.95-9.92-6.86-13.49-13.56-.38-.71-1.94-.89-2.52-.31-4.89,4.84-10.18,9.11-14.4,15.09-8.13,11.51-17.37,20.16-27.34,27.14-12.71,8.9-25.62,17.16-38.32,26.07-5.92,4.15-11.57,9.2-17.35,13.83-.23.12-.46.24-.68.36.02.13.04.25.06.38.3-.07.61-.14.91-.22.71-.42,1.43-.83,2.13-1.27,8.69-5.37,17.4-10.67,26.67-13.34,2.3-.66,4.71-.98,7.03-.68,3.34.43,4.46,3.38,3.38,8.18-.49,2.17-1.32,4.16-1.95,6.26-.27.89-.4,1.87-.6,2.77-.06-.17-.12-.33-.18-.5.06.16.13.32.19.48ZM695.65,184.08c6.25-4.65,12.56-9.1,18.72-13.99,6.98-5.54,13.77-11.63,21.48-14.65,5.45-2.13,10.77-1.99,15.86,2.13,2.16,1.75,2.32,2.79,1.01,5.92-1.23,2.94-1.17,4.82.77,6.73,2.15,2.11,4.42,4.21,6.83,5.37,10.42,5,20.92,9.64,31.39,14.4.2.09.46-.05,1.22-.15-.9-.64-1.32-.94-1.74-1.23-5.74-3.8-11.56-7.39-17.2-11.49-2.35-1.7-4.54-4.18-6.46-6.88-2.39-3.35-2.08-6.78.68-9.37,1.64-1.54,3.47-2.79,5.32-3.57,1.86-.78,2.23-2.33,1.66-4.67-.88-3.6-1.89-7.11-2.86-10.73,5.94,0,11.42,2.66,16.34,7.92,2.56,2.74,5.02,5.71,7.56,8.5,4.88,5.37,10,9.77,16.01,11.93,4.22,1.51,8.32,4.11,12.27,6.87,4.87,3.39,9.53,7.46,14.29,11.22.56.45,1.17.78,2.18,1.44-.38-.98-.44-1.31-.59-1.49-2.92-3.44-5.86-6.82-8.77-10.29-20.82-24.83-44.97-41.5-67.15-63-2.78-2.69-5.77-2.41-8.51.27-1.8,1.77-3.5,3.85-5.08,6.05-2.37,3.28-4.54,6.88-6.89,10.18-8.61,12.02-18.41,21.56-28.17,31.21-6.88,6.8-13.64,13.89-20.45,20.85l-.66.38c.02.12.04.25.06.37.3-.08.59-.16.89-.24ZM518.84,203.45c.04.29.09.57.13.86.75-.42,1.54-.72,2.23-1.28,5.18-4.15,10.37-8.27,15.49-12.56,16.73-14.02,33.71-27.2,51.73-37.15,8.23-4.55,16.21-10.16,24.29-15.33.75-.48,1.41-1.28,2.6-2.39-1.47-.12-2.24-.11-3-.26-3.06-.59-5.63-2.23-6.96-6.93-1.24-4.34-2.1-5.02-4.78-2.7-4.04,3.51-8.04,7.24-11.76,11.48-4.63,5.29-9.5,9.9-15.16,11.72-8.37,2.68-14.95,9.58-20.78,18.52-4.44,6.82-9.43,12.52-14.77,17.59-6.43,6.11-12.84,12.28-19.26,18.43ZM632.17,205.8c.08.28.17.56.25.84.46,0,.96.19,1.37-.03,6.74-3.51,13.8-5.48,19.93-11.75,8.43-8.62,17.23-16.41,25.86-24.59,9.59-9.09,19.74-15.91,30.92-19.33,5.7-1.74,11.2-4.99,16.75-7.74,1.37-.68,2.59-2.07,3.88-3.14-4.83-.22-8.33-3.21-11.11-8.73-1.76-3.49-3.36-4.03-6.09-2.4-1.67,1-3.32,2.26-4.81,3.77-5.73,5.83-11.33,11.96-17.09,17.7-13.67,13.62-26.74,28.73-41.67,39.33-3.59,2.55-7.06,5.51-10.5,8.53-2.64,2.31-5.13,5-7.69,7.53Z"/>
                      <path class="cls-268" d="M695.35,183.58c6.81-6.96,13.57-14.05,20.45-20.85,9.76-9.65,19.56-19.19,28.17-31.21,2.36-3.29,4.53-6.9,6.89-10.18,1.59-2.2,3.28-4.28,5.08-6.05,2.74-2.68,5.73-2.96,8.51-.27,22.18,21.5,46.33,38.16,67.15,63,2.9,3.46,5.85,6.85,8.77,10.29.15.17.21.51.59,1.49-1.01-.66-1.61-1-2.18-1.44-4.76-3.76-9.42-7.83-14.29-11.22-3.96-2.76-8.06-5.36-12.27-6.87-6.01-2.16-11.13-6.56-16.01-11.93-2.54-2.79-5-5.76-7.56-8.5-4.92-5.26-10.4-7.92-16.34-7.92.97,3.62,1.99,7.14,2.86,10.73.57,2.34.2,3.88-1.66,4.67-1.85.78-3.68,2.04-5.32,3.57-2.76,2.59-3.07,6.02-.68,9.37,1.92,2.69,4.12,5.17,6.46,6.88,5.65,4.1,11.46,7.69,17.2,11.49.42.28.84.59,1.74,1.23-.76.11-1.01.25-1.22.15-10.47-4.76-20.97-9.41-31.39-14.4-2.42-1.16-4.69-3.26-6.83-5.37-1.94-1.91-2-3.8-.77-6.73,1.31-3.13,1.15-4.18-1.01-5.92-5.08-4.12-10.41-4.26-15.86-2.13-7.71,3.02-14.51,9.12-21.48,14.65-6.16,4.89-12.47,9.34-18.72,13.99l-.29-.51Z"/>
                      <path class="cls-268" d="M553.81,188.03c5.77-4.64,11.42-9.68,17.35-13.83,12.71-8.91,25.61-17.17,38.32-26.07,9.97-6.98,19.21-15.63,27.34-27.14,4.22-5.98,9.51-10.25,14.4-15.09.58-.58,2.14-.4,2.52.31,3.57,6.7,8.74,9.61,13.49,13.56,7.15,5.95,14.26,11.97,21.37,18.02.93.79,1.75,1.9,2.44,3.38-3.41-.72-6.82-1.55-10.25-2.12-2-.33-4.07-.61-6.04-.21-1.22.25-2.6,1.45-3.41,2.87-1.2,2.11-2.53,1.52-3.83,1.23-3.45-.76-6.86-1.83-10.31-2.62-1.99-.46-4.02-.69-6.03-.87-1.91-.17-3.33.98-4.19,3.76-1.52,4.9-4.32,7.9-7.52,9.51-6.07,3.04-12.19,6.02-18.44,8.03-6.79,2.19-12.51,6.25-16.46,15.22-3.33,7.56-8.2,11.86-13.8,14.51l-.02.06c.2-.94.33-1.92.6-2.81.63-2.1,1.46-4.09,1.95-6.26,1.08-4.8-.05-7.75-3.38-8.18-2.32-.3-4.74.01-7.03.68-9.26,2.67-17.98,7.97-26.67,13.34-.71.44-1.42.85-2.13,1.27-.1-.18-.19-.35-.29-.53Z"/>
                      <path class="cls-268" d="M518.77,203.45c6.42-6.15,12.83-12.32,19.26-18.43,5.34-5.07,10.33-10.76,14.77-17.59,5.82-8.94,12.41-15.84,20.78-18.52,5.66-1.81,10.53-6.42,15.16-11.72,3.72-4.24,7.72-7.97,11.76-11.48,2.67-2.33,3.54-1.64,4.78,2.7,1.34,4.7,3.91,6.34,6.96,6.93.76.15,1.53.14,3,.26-1.19,1.11-1.85,1.91-2.6,2.39-8.08,5.17-16.06,10.78-24.29,15.33-18.02,9.95-35,23.13-51.73,37.15-5.13,4.29-10.32,8.41-15.49,12.56-.7.56-1.49.86-2.23,1.28-.04-.29-.09-.57-.13-.86Z"/>
                      <path class="cls-268" d="M632.17,205.8c2.56-2.52,5.05-5.21,7.69-7.53,3.44-3.01,6.91-5.98,10.5-8.53,14.93-10.6,27.99-25.71,41.67-39.33,5.77-5.74,11.36-11.88,17.09-17.7,1.49-1.52,3.14-2.77,4.81-3.77,2.73-1.63,4.33-1.1,6.09,2.4,2.78,5.52,6.28,8.51,11.11,8.73-1.29,1.06-2.51,2.46-3.88,3.14-5.55,2.75-11.05,5.99-16.75,7.74-11.19,3.42-21.33,10.24-30.92,19.33-8.63,8.18-17.43,15.97-25.86,24.59-6.13,6.27-13.19,8.24-19.93,11.75-.41.21-.91.03-1.37.03-.08-.28-.17-.56-.25-.84Z"/>
                      <path class="cls-268" d="M696.65,184.08c-.3.08-.59.16-.89.24-.02-.12-.04-.25-.06-.37l.66-.38.29.51Z"/>
                      <path class="cls-268" d="M554.09,188.56c-.3.07-.61.14-.91.22-.02-.13-.04-.25-.06-.38.23-.12.46-.24.68-.36.1.18.19.35.29.53Z"/>
                      <path class="cls-268" d="M591.78,190.47c-.06-.16-.13-.32-.19-.48.06.17.12.33.18.52,0,.02.01-.04.01-.04Z"/>
                    </g>
                  </g>
                  <g id="space-needle">
                    <path class="cls-286" d="M14.74,237.58l7.97-59.25,1.65,1.65-.22.22c4.01,2.99,84,63.32,41.86,79.17-42.6,16.02-87.92-4.03-53.72-22.12l2.46.33Z"/>
                    <g>
                      <path class="cls-275" d="M45.8,44.99c.16.36.5.75.45,1.07-1.01,6.52-2.1,13.04-3.09,19.56-1.21,7.99-2.31,16-3.53,23.99-.91,5.97-.48,11.93-.09,17.89.24,3.63.37,7.27.56,10.91.46,8.89.92,17.79,1.4,26.68.44,8.13.9,16.25,1.35,24.38.38,7.05.74,14.09,1.14,21.14.29,5.16.65,10.32.95,15.48.04.7.27,1.01,1.02,1.1,2.05.25,3.36,1.67,4.62,3.13-1.73,0-3.45,0-5.28,0,.08,1.05.15,1.88.23,2.86h5.17c-.2.38-.31.87-.61,1.13-1.46,1.26-2.15,3.35-4.22,3.99-.15.05-.24.55-.23.83.42,7.66.84,15.33,1.29,22.99.14,2.32.35,4.65.53,6.97h-2.7c-.26-4.84-.53-9.69-.76-14.53-.04-.88-.41-1.19-1.26-1.14-.94.05-1.9.09-2.83,0-1.33-.14-1.7.37-1.64,1.67.23,4.67.37,9.34.54,14.01h-3.51c.03-.44.09-.89.08-1.33-.3-13.4-.6-26.8-.91-40.2-.25-10.79-.5-21.58-.73-32.38-.02-.85-.12-1.35-1.16-1.29-1.53.08-3.06.02-4.59.02-1.33-.06-2.67-.1-4-.18-.97-.06-1.36.4-1.42,1.35-.09,1.39-.26,2.77-.42,4.15-.47,4.15-.98,8.29-1.43,12.44-.5,4.64-.94,9.28-1.45,13.92-.16,1.49-.15,1.57,1.42,1.58,2.34.01,4.68.03,7.01.04v3.11h-8.9c-.12.99-.22,1.83-.35,2.9h9.26c0,1.6-.01,3.19-.02,4.79-.53.07-1.06.19-1.59.19-2.43.02-4.85.02-7.28,0-.64,0-1.11.05-1.2.88-.39,3.34-.85,6.67-1.26,10-.44,3.55-.84,7.11-1.27,10.66-.38,3.11-.77,6.22-1.15,9.34h-3.24c.71-5.41,1.45-10.83,2.14-16.24.64-4.97,1.21-9.95,1.86-14.92.17-1.33.06-2.47-1.06-3.39-.43-.35-.69-.9-1.02-1.36h2.46c.1-1.02.19-1.88.29-2.85h-1.87c-.01-.28-.12-.77-.03-.81,2.3-.93,2.58-2.89,2.79-5.02.51-5.14,1.19-10.26,1.77-15.4.63-5.53,1.25-11.06,1.84-16.59.57-5.31,1.14-10.63,1.65-15.94.83-8.62,1.67-17.25,2.41-25.88.54-6.27,1.08-12.54,1.34-18.82.33-8,.54-16,.5-24-.02-3.98-.68-7.96-1.11-11.93-.55-5-1.19-9.99-1.73-14.98-.53-4.87-.99-9.74-1.45-14.61-.03-.36.23-.74.35-1.11.89.09,1.78.17,2.67.26.23,2.05.46,4.1.69,6.15.5,4.36.98,8.72,1.53,13.07.25,2.02.65,4.03.98,6.05.92,8.9,1.79,17.82,1.38,26.78-.4,8.53-.93,17.06-1.4,25.59-.07.38-.18.76-.22,1.15-.29,3.39-.55,6.79-.87,10.18-.4,4.37-.85,8.74-1.27,13.1-.33,3.43-.66,6.87-1,10.3-.44,4.45-.88,8.9-1.33,13.46h10.63c-1-41.91-1.99-83.63-2.98-125.4h2.97c0,.55-.01,1.04,0,1.52.19,7.2.3,14.4.61,21.59.12,2.86.68,5.7,1.05,8.54.02.31-.05.67.08.93.27.52.66.98.99,1.47.48-.39,1.15-.69,1.39-1.2.56-1.17,1.01-2.41,1.33-3.66,2.08-8.11,3-16.4,3.86-24.7.18-1.73.5-3.44.76-5.16.71-.08,1.42-.17,2.12-.25ZM43.63,231.21c.05-.51.11-.82.1-1.13-.18-3.72-.35-7.43-.6-11.14-.02-.31-.55-.81-.88-.84-1.16-.1-2.33-.02-3.5-.05-.76-.02-1.03.33-1.01,1.06.12,3.72.19,7.44.35,11.16.01.32.53.87.84.89,1.51.09,3.04.04,4.69.04ZM42.06,198.22c-.11-2.48-.2-4.76-.33-7.05-.11-2.08-.13-2.08-2.26-2.07-.54,0-1.08.03-1.62,0-.87-.05-1.24.27-1.12,1.19.12.89.14,1.79.17,2.68.06,2.06.01,4.14.17,6.19.17,2.25.25,2.28,2.5,2.32,2.92.05,2.55.14,2.48-2.37-.01-.36,0-.72,0-.89ZM41.39,186.69c-.18-3.57-.27-6.89-.55-10.2-.26-2.98-.35-2.95-3.38-2.77-.84.05-1.09.4-1.07,1.17.11,3.64.18,7.29.32,10.93.01.3.45.81.72.83,1.29.09,2.58.04,3.96.04ZM38.15,171.49c2.41,0,2.4-.03,2.23-2.17-.26-3.17-.5-6.34-.69-9.52-.05-.83-.3-1.27-1.19-1.23-.49.03-.99.03-1.48,0-.7-.04-.96.27-.94.96.1,3.41.26,6.81.21,10.22-.03,1.69.68,2.02,1.86,1.75ZM35.86,154.74h.14c.04.48.02,1.34.14,1.36.91.15,1.85.22,2.75.11.2-.02.45-.89.42-1.35-.22-3.39-.58-6.77-.72-10.17-.06-1.35-.81-1.2-1.68-1.26-1.13-.09-1.07.6-1.07,1.36.01,3.31,0,6.63,0,9.94ZM36.64,129.11c-.3.37-.44.47-.45.57-.12,3.54-.23,7.07-.33,10.61-.03,1.04.75.91,1.42.92.89.02,1.05-.51.97-1.24-.35-3.16-.7-6.31-1.08-9.47-.05-.4-.29-.79-.53-1.4ZM40.02,207.15c2.77,0,2.93-.15,2.33-2.67-.07-.31-.52-.72-.82-.74-1.11-.08-2.24-.08-3.35.01-.33.03-.83.41-.9.71-.53,2.08-.04,2.69,2.07,2.69.22,0,.45,0,.67,0ZM37.74,213.07h4.99c-.05-.94-.09-1.8-.14-2.63h-4.85v2.63Z"/>
                      <path class="cls-271" d="M28,173.92c1.53,0,3.06.06,4.59-.02,1.04-.05,1.14.45,1.16,1.29.23,10.79.48,21.58.73,32.38.31,13.4.61,26.8.91,40.2,0,.44-.05.88-.08,1.33h-7.3c-.02-.36-.06-.72-.06-1.08,0-9.49,0-18.98,0-28.47,0-.51-.15-1.02-.23-1.53,0-1.6.01-3.19.02-4.79,0-.97,0-1.93,0-2.9,0-1.04,0-2.07,0-3.11.08-.47.23-.93.23-1.4.02-3.1,0-6.19,0-9.29.01-7.54.03-15.07.05-22.61Z"/>
                      <path class="cls-271" d="M45.8,44.99c-.71.08-1.42.17-2.12.25-2.31.13-4.62.32-6.93.35-1.05.01-1.27.4-1.26,1.35.05,3.01.02,6.02.02,9.03,0,5.16.03,10.32,0,15.48-.01,2.04-.15,4.08-.23,6.12-.36-2.85-.92-5.69-1.05-8.54-.31-7.19-.42-14.39-.61-21.59-.01-.48,0-.96,0-1.52h-2.97c.99,41.77,1.99,83.49,2.98,125.4h-5.58c-.08-.66-.23-1.31-.23-1.97-.01-14.78,0-29.57,0-44.35,0-.62-.08-1.25-.12-1.87.47-8.53,1-17.06,1.4-25.59.42-8.97-.45-17.88-1.38-26.78.03-.4.09-.8.09-1.2,0-5.48,0-10.95,0-16.43,0-2.15.02-4.31-.03-6.46,0-.36-.27-1-.49-1.04-.91-.14-1.85-.1-2.77-.13-.89-.09-1.78-.17-2.67-.26-1.09-.33-2.19-.65-3.28-.98,2.64-.17,5.28-.49,7.92-.47,6.91.07,13.82.29,20.73.44-.47.25-.93.5-1.4.75Z"/>
                      <path class="cls-275" d="M10.45,27.93c.41-.3.77-.71,1.22-.88,4.37-1.59,8.76-3.14,13.15-4.72.15-.06.28-.2.59-.43-1.21-.63-2.32-1.15-3.36-1.78-.46-.28-.79-.76-1.18-1.15.52-.38.99-.89,1.57-1.12.77-.31,1.63-.4,2.46-.58,5.08.02,10.15.04,15.23.06.87.19,1.77.3,2.6.6.45.16.98.59,1.09,1.01.08.28-.42.87-.79,1.1-1.05.64-2.18,1.17-3.58,1.91,2.29.84,4.28,1.59,6.28,2.3,2.66.95,5.33,1.85,7.99,2.81.4.14.73.48,1.09.72-.62-.01-1.25.01-1.86-.04-14.16-1.31-28.32-1.2-42.48.17Z"/>
                      <path class="cls-275" d="M47.2,44.23c-6.91-.16-13.82-.38-20.73-.44-2.64-.03-5.28.3-7.92.47-4.11-.23-8.26-.33-12.07-2.11-.03-.18-.06-.36-.08-.55.82-.35,1.64-.69,2.46-1.05.37-.16.72-.36,1.07-.55,1.56-.19,3.12-.41,4.68-.55,14.03-1.23,28.05-1.45,42.01.88.81.42,1.62.83,2.82,1.44-.82.48-1.29.96-1.82,1.03-3.47.52-6.95.96-10.42,1.42Z"/>
                      <path class="cls-274" d="M56.63,40.33c-13.96-2.33-27.98-2.11-42.01-.88-1.56.14-3.12.36-4.68.55-.17-1.3-.34-2.61-.51-3.91-.18-.98.5-.96,1.15-1,4.76-.33,9.51-.76,14.27-.98,10.54-.48,21.05-.06,31.54,1.03.32.03.6.46.9.71-.22,1.49-.43,2.99-.65,4.48Z"/>
                      <path class="cls-275" d="M57.28,35.86c-.3-.24-.58-.67-.9-.71-10.49-1.09-21-1.51-31.54-1.03-4.76.22-9.51.65-14.27.98-.65.04-1.33.02-1.15,1-1.8-.16-3.61-.24-5.4-.49-1.23-.18-2.42-.59-3.62-1.17,2.6-1.74,5.7-1.47,8.37-2.59.81,0,1.62.05,2.43.01,3.81-.19,7.61-.45,11.42-.6,10.53-.42,21.05-.21,31.55.57.75.06,1.51.02,2.26.03,1.69.36,3.38.69,5.07,1.08,1.3.3,2.74.25,4.01,1.49-.63.27-1.03.52-1.46.62-1.74.39-3.49.76-5.25,1.05-.48.08-1.02-.16-1.53-.25Z"/>
                      <path class="cls-274" d="M10.45,27.93c14.15-1.37,28.31-1.48,42.48-.17.62.06,1.24.03,1.86.04.58.14,1.16.29,1.78.44-.1,1.15-.19,2.2-.29,3.25-.13.02-.27.07-.4.06-7.15-.44-14.3-1.08-21.45-1.28-5.28-.15-10.58.22-15.86.47-3.17.15-6.33.53-9.49.8-.08-1.09-.16-2.17-.24-3.3.61-.12,1.11-.22,1.61-.32Z"/>
                      <path class="cls-271" d="M9.07,31.56c3.16-.28,6.32-.65,9.49-.8,5.28-.25,10.58-.62,15.86-.47,7.16.2,14.3.83,21.45,1.28.13,0,.27-.04.4-.06.06.12.11.24.17.36-.75,0-1.51.02-2.26-.03-10.51-.79-21.03-.99-31.55-.57-3.81.15-7.61.41-11.42.6-.81.04-1.62,0-2.43-.01.1-.09.19-.19.29-.28Z"/>
                      <path class="cls-271" d="M40.11,17.34c-5.08-.02-10.16-.04-15.23-.06,1-.36,1.98-.86,3.01-1.06,1.39-.26,2.82-.29,4.23-.43.49,0,.98,0,1.48,0,1.88.26,3.77.49,5.64.81.32.06.58.48.87.74Z"/>
                      <path class="cls-274" d="M50.69,213.18h-5.17c-.08-.97-.14-1.81-.23-2.86,1.82,0,3.55,0,5.28,0,.92.49.98,2.05.12,2.86Z"/>
                      <path class="cls-275" d="M33.6,15.8c-.49,0-.98,0-1.48,0,.1-3.73.2-7.46.33-11.19,0-.28.28-4.34.43-4.61.15.28.42,4.33.43,4.61.12,3.73.2,7.46.29,11.19Z"/>
                      <path class="cls-274" d="M13.5,210.33h1.87c-.1.97-.19,1.83-.29,2.85h-2.46c-1.27-.66-.44-1.74-.61-2.63.55-.08,1.02-.15,1.49-.23Z"/>
                      <path class="cls-274" d="M27.72,210.32c0,.97,0,1.93,0,2.9h-9.26c.13-1.08.23-1.91.35-2.9h8.91Z"/>
                      <path class="cls-274" d="M37.74,213.07v-2.63h4.85c.04.83.09,1.69.14,2.63h-4.99Z"/>
                    </g>
                  </g>
                </svg>`,
			}}
		></div>
	);
}
